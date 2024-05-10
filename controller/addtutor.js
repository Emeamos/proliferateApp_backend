import Tutor from '../model/tutor.js'
import Subject from '../model/subject.js';
import cloudinary from '../utilis/cloudinary.js';

export const createTutorController = async (req, res) => {
  try {
    const subjectId = req.params.subjectId; 
    // const { subjectId, image, cloudinary_id, fullname, qualification, user } = data;
    // const { secure_url: image, public_id: cloudinary_id } = await cloudinary.upload(req.file.path);
    const result = await cloudinary.uploader.upload(req.file.path);
    const { secure_url: image, public_id: cloudinary_id } = result;
    // Create a new tutor
    const newTutor = await Tutor.create({
        image,
        cloudinary_id,
        subject: [subjectId],
        fullname,
        qualification
    });

    // Push the tutorId to the subject's tutor array
    await Subject.findByIdAndUpdate(
        subjectId,
        { $push: { tutors: newTutor._id } },
        { new: true }
    );

    const responseData = {
        image,
        subject: [subjectId],
        fullname,
        qualification,
    };

    res.status(200).json({ message: 'Tutor created and associated with subject', data: responseData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
