import express from "express";
import {
  addUpdate,
  getUpdates,
  deleteUpdate,
  updateUpdate,
} from "../controllers/updateController.js";

const router = express.Router();

router.post("/add", addUpdate);
router.get("/all", getUpdates);
router.delete("/delete/:id", deleteUpdate);
router.put("/update/:id", updateUpdate);

export default router;