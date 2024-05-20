import User from "../model/usermodel.js";
import { errorHandler } from "../util/error.js";
import bcypt from "bcryptjs";
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcypt.hashSync(password, 12);
  const newUser = User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json("User Created Successeful");
  } catch (error) {
    next(errorHandler(550, "error creating user"));
  }
};
