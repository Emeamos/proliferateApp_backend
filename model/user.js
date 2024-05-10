import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      phonenumber: {
        type: String,
      },
      gender: {
        type: String,
      },
      age: {
        type: String,
      },
      grade: {
        type: String,
      },
      attendance_type: {
        type: String,
      },
      current_location: {
        type: String,
      },
      short_term_goal: {
        type: String,
      },
      long_term_goal: {
        type: String,
      },
      tutor: [
        {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Tutor',
        },
      ]
    },
    { timestamps: true }
  )

const User = mongoose.model('User', userSchema);

export default User;