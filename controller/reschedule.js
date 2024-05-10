import Class from "../model/class.js";

export const rescheduleController = async (req, res) => {
    const classId = req.params.classId;
    const newDate = req.body.date;

    try {
        const updatedClass = await Class.findByIdAndUpdate(classId, { date: newDate }, { new: true });

        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        const notification = new Notification({
            class: updatedClass._id,
            message: `The class "${updatedClass.name}" has been rescheduled for ${newDate}.`
        });
        await notification.save();

        updatedClass.notifications.push(notification);
        await updatedClass.save();

        res.status(200).json({ message: 'Class rescheduled successfully', class: updatedClass });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};