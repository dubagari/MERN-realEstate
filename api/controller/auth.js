import User from "../model/usermodel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../util/error.js";

export const signUp = async (req, res, next) => {
  const { userName, email, password } = req.body;

  const haspassword = bcrypt.hashSync(password, 12);

  const newUser = new User({
    userName: userName,
    email: email,
    password: haspassword,
  });
  try {
    await newUser.save();
    res.status(201).json("user created successefully");
  } catch (err) {
    next(err);
  }
};
