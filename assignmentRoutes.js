import express from "express";
import {
  getAssignments,
  addAssignment,
  updateAssignment,
} from "../controllers/assignmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes are protected
router.use(protect);

router.get("/", getAssignments);
router.post("/", addAssignment);
router.patch("/:id", updateAssignment);

export default router;
