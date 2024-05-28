import jwt from "jsonwebtoken";
import errorHandler from "./error.js";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return errorHandler(401, "unathorize");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return errorHandler(403, "Forbidden");

    req.user = user;
    next();
  });
};
