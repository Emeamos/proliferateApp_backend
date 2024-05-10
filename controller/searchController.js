import Subject from "../model/subject.js";
import Tutor from "../model/tutor.js";

export const searchController = async (req, res) => {
    const { subjectName } = req.query;

    try {
        // Search for the subject by name
        const subject = await Subject.findOne({ name: subjectName });
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }

        // Find tutors teaching the subject
        const tutors = await Tutor.find({ subjects: subject._id });

        res.status(200).json({ subject, tutors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};