import express from "express";
import { addStaff, getStaff, deleteStaff } from "../controllers/staffController.js";

const router = express.Router();

router.post("/", addStaff);
router.get("/", getStaff);
router.delete("/:id", deleteStaff);

export default router;