// routes/userRoutes.js
import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Signup & Login routes
router.post("/signup", register);
router.post("/login", login);

export default router;
