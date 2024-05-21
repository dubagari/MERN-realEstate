import User from "../model/usermodel.js";
import { errorHandler } from "../util/error.js";
import bcypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashPassword = bcypt.hashSync(password, 12);
  const newUser = User({ userName, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json("User Created Successeful");
  } catch (error) {
    next(errorHandler(550, "duplicate key"));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const valideUser = await User.findOne({ email });
    if (!valideUser) return next(errorHandler(404, "user not found!"));
    const validPassword = bcypt.compareSync(password, valideUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentails!"));

    const token = jwt.sign({ id: valideUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...ress } = valideUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(ress);
  } catch (error) {
    next(error);
  }
};
