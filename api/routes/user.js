import express from "express";
import { postUser, updateUser } from "../controller/user.js";
import { verifyUser } from "../util/verifyUser.js";

const routes = express.Router();

routes.get("/testt", postUser);
routes.post("/update/:id", verifyUser, updateUser);

export default routes;
