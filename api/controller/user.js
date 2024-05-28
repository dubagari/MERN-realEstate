import errorHandler from "../util/error.js";
import bcrypt from "bcryptjs";
import User from "../model/usermodel.js";
import mongoose, { Mongoose } from "mongoose";

export const postUser = (req, res) => {
  res.json({
    mas: " api routes is working!!!",
  });
};

export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  if (req.user.id !== userId)
    return errorHandler(401, "you can only update your account");
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(password, 10);
    }

    const updateUser = await User.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(userId) },

      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...ress } = updateUser._doc;
    res.status(200).json(ress);
  } catch (error) {
    next(error);
  }
};
