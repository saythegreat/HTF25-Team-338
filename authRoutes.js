import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Use "register" for signup route
router.post("/signup", register);
router.post("/login", login);

export default router;
