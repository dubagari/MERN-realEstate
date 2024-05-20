import express from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("database is running"))
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log("server running at 3000");
});
