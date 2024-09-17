import mongoose from "mongoose";
// schema or modal in  your database
const UserSchema = new mongoose.Schema(
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

    course: {
      type: String,
      required: true,
    },

    school: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("user", UserSchema);
