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
        "https://www.bing.com/ck/a?!&&p=962d1dc34a356191JmltdHM9MTcxNjU5NTIwMCZpZ3VpZD0zMzliYTc5OC02M2VhLTY3YzQtM2RiOC1iNDJiNjIwNzY2YWYmaW5zaWQ9NTUzOQ&ptn=3&ver=2&hsh=3&fclid=339ba798-63ea-67c4-3db8-b42b620766af&u=a1L2ltYWdlcy9zZWFyY2g_cT11c2VyJTIwcG5nJTIwaWNvbiZGT1JNPUlRRlJCQSZpZD03QTc4RTc4NjE3MTdGQTA2QUIxQTMwQjFBRjA1NTcxQUNDNUIzODgz&ntb=1",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
