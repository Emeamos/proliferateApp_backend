import Subject from '../model/subject.js';

export const createSubjectController = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newSubject = new Subject({
            name,
            description
        });

        await newSubject.save();

        res.status(201).json({ message: 'Subject added successfully', subject: newSubject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
