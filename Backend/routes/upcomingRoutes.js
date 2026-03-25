import express from "express";
import {
  addUpcoming,
  getUpcoming,
  deleteUpcoming,
} from "../controllers/upcomingController.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/add", upload.single("image"), addUpcoming);
router.get("/all", getUpcoming);
router.delete("/delete/:id", deleteUpcoming);

export default router;