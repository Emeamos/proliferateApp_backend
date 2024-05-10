import Tutor from '../model/tutor.js'
import User from '../model/user.js';
import Subject from '../model/subject.js';
export const createTutorController = async (req, res) => {
  const { fullname, availability } = req.body;
  const subjectId = req.params.subjectId;
  const userId = req.user.id; // Assuming you have userId available in req.user

  try {
      const newTutor = new Tutor({
          fullname,
          subject: [subjectId], 
          availability
      });

      await newTutor.save();

      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      user.tutor.push(newTutor._id);
      await user.save();

      res.status(201).json({ message: 'Tutor added successfully', tutor: newTutor });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};