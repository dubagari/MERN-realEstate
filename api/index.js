import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO)
  .then((resutl) => {
    console.log("mongodb is connected successeful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server running at 3000");
});
