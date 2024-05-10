import mongoose from "mongoose";
const TutorSchema = mongoose.Schema(
    {
      image: {
        type: String,
      },
      cloudinary_id: {
        type: String,
      },
      subject: {
        type: String,
      },
      fullname: {
        type: String,
      },
      qualification: {
        type: String,
      },
      Teaching_style: {
        type: String,
      },
      availiability: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        time: String,
      },
      rating: {
        type: String,
      },
      bio: {
        type: String,
      },
      user: {
        _id: mongoose.Types.ObjectId,
        fullname: String,
        email: String,
      },
      subject: [
        {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Subject',
        },
      ],
    },
    { timestamps: true }
  )

  const Tutor = mongoose.model('Tutor', TutorSchema);

  export default Tutor;