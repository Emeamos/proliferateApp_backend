import Class from "../model/class.js";
export const unreadNotificationController = async (req, res) => {
    const userId = req.userAuth;

    try {
        const classes = await Class.find({}).populate({
            path: 'notifications',
            match: { read: false }
        });

        const unreadNotifications = [];
        classes.forEach(cls => {
            cls.notifications.forEach(notification => {
                if (notification.class.user.toString() === userId) {
                    unreadNotifications.push(notification);
                }
            });
        });

        res.status(200).json({ notifications: unreadNotifications });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};