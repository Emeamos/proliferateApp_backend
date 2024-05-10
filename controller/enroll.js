import Subject from '../model/subject.js';
import Tutor from '../model/tutor.js';
import Notification from '../model/notification.js';
import Classmodel from '../model/class.js';
import User from '../model/user.js';

export const enrollController = async (req, res) => {
    const { subjectId, tutorId } = req.params;
    const userId = req.userAuth;
    
    try {
        const tutor = await Tutor.findById(tutorId);
        if (!tutor) {
            return res.status(404).json({ message: 'Tutor not found' });
            }
            const subject = await Subject.findById(subjectId);
        if (!subject) {
          return res.status(404).json({ message: 'Subject not found' });
        }
        if (!Tutor.Subject.includes(subjectId)) {
            return res.status(400).json({ message: 'Tutor does not teach the selected subject' });
          }

        // Create a new class
        const newClass = new Classmodel({
            subject: subjectId,
            tutor: tutorId
        });
        await User.findByIdAndUpdate(
            userId,
            { $push: { tutors: newTutor._id } },
            { new: true }
        );

        // Create a notification for the enrolled class
        const notification = Notification.create({
            class: newClass._id,
            message: `You have successfully enrolled in the class "${subject.name}" with tutor "${tutor.name}".`
        });

        // Associate notification with the class
        newClass.notifications.push(notification);
        await newClass.save();


        res.status(200).json({ message: 'Enrolled successfully', class: newClass });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

