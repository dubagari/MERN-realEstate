import User from "../model/usermodel.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
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
  } catch (error) {
    res.status(500).json({ massa: "user already exsis" });
  }
};
