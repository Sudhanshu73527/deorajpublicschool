import express from "express";
import { addAdmission, getAdmissions, deleteAdmission } from "../controllers/admissionController.js";
import { upload } from "../middleware/upload.js"; // Same multer setup as gallery/events

const router = express.Router();

// Add new notification
router.post("/add", upload.single("image"), addAdmission);

// Get all notifications
router.get("/all", getAdmissions);

// Delete notification
router.delete("/delete/:id", deleteAdmission);

export default router;