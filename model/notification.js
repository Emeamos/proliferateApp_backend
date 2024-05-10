import mongoose from "mongoose";
const NotificationSchema = mongoose.Schema(
    {
      message: {
        type: String,
      },
      read: {
        type: Boolean, default: false
      },
      user: {
        _id: mongoose.Types.ObjectId,
        fullname: String,
        email: String,
      },
      class: [
        {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Class',
        },
      ],
    },
    { timestamps: true }
  )
  const Notification = mongoose.model('Class', NotificationSchema);

  export default Notification;