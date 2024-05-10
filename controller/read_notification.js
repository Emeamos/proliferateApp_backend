import Notification from "../model/notification.js";
export const readNotificationController =  async (req, res) => {
    const notificationId = req.params.notificationId;

    try {
        const notification = await Notification.findByIdAndUpdate(notificationId, { read: true }, { new: true });

        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }

        res.status(200).json({ message: 'Notification marked as read', notification });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};