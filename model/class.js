import mongoose from "mongoose";
const ClassSchema = mongoose.Schema(
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      tutors: [{
        type: String,
      }],
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
  const Classmodel = mongoose.model('Classmodel', ClassSchema);

  export default Classmodel;