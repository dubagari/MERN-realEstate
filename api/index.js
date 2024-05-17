import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import authRoute from "./routes/auth.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoute);

app.use((err, req, res, nex) => {
  const statuscode = err.statuscode || 500;
  const massage = err.massage || "Internal server Error";
  return res.status(statuscode).json({
    success: false,
    statusCode: statuscode,
    massage: massage,
  });
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected successeful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server running at 3000");
});
