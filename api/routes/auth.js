import express from "express";
import { signUp, signin } from "../controller/auth.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signin);

export default router;
