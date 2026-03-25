import express from "express";
import { addFee, getFees, deleteFee } from "../controllers/feeController.js";

const router = express.Router();

router.post("/", addFee);
router.get("/", getFees);
router.delete("/:id", deleteFee);

export default router;