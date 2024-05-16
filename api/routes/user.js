import express from "express";
import { postUser } from "../controller/user.js";

const routes = express.Router();

routes.get("/testt", postUser);

export default routes;
