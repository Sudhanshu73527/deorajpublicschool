import express from "express";
import {
  addEvent,
  getEvents,
  deleteEvent,
} from "../controllers/eventController.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/add", upload.single("image"), addEvent);
router.get("/all", getEvents);
router.delete("/delete/:id", deleteEvent);

export default router;