import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://lh3.googleusercontent.com/a/ACg8ocIDCp6xgts55m-F8Pnyy9juUfxBER2RzcbXf7b0DdIWqKiVbNT8=s96-c",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
