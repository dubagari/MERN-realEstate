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

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("database is running"))
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log("server running at 3000");
});
