// routes/chatRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { chatWithAI } from "../controllers/chatController.js";

const router = express.Router();

// Protect route so only logged-in users can access
router.use(protect);

router.post("/", chatWithAI);

export default router;
