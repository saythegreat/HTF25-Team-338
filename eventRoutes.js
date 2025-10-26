// routes/eventRoutes.js
import express from "express";
import {
  getTimetable,
  addTimetable,
  updateTimetable,
  deleteTimetable,
} from "../controllers/timetableController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all routes
router.use(protect);

router.get("/", getTimetable);
router.post("/", addTimetable);
router.patch("/:id", updateTimetable);
router.delete("/:id", deleteTimetable);

export default router;
