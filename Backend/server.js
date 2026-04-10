import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import updateRoutes from "./routes/updateRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import upcomingRoutes from "./routes/upcomingRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import schoolGalleryRoutes from "./routes/schoolGalleryRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import feeRoutes from "./routes/feeRoutes.js";
import infrastructureRoutes from "./routes/infrastructureRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/updates", updateRoutes);
app.use("/api/gallery", galleryRoutes)
app.use("/api/events", eventRoutes);
app.use("/api/upcoming", upcomingRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/school-gallery", schoolGalleryRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/infrastructure", infrastructureRoutes);
app.use("/api/students", studentRoutes);

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});