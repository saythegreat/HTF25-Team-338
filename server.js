// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import timetableRoutes from "./routes/timetableRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Public/auth routes
app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api/assignments", assignmentRoutes); // Assignments routes are protected inside
app.use("/api/timetable", timetableRoutes);    // Timetable routes are protected inside
app.use("/api/files", fileRoutes);             // File upload routes
app.use("/api/chat", chatRoutes);              // ChatGPT AI routes

// Test root route
app.get("/", (req, res) => res.send("🚀 AI Student Assistant Backend Running"));

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
