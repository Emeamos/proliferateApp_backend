import mongoose from "mongoose";
const SubjectSchema = mongoose.Schema(
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
    },
    { timestamps: true }
  )
  const Subject = mongoose.model('Subject', SubjectSchema);

  export default Subject;