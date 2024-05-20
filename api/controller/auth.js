import User from "../model/usermodel.js";
import bcypt from "bcryptjs";
export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcypt.hashSync(password, 12);
  const newUser = User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json("User Created Successeful");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
