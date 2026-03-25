import express from "express";
import { upload } from "../middleware/upload.js";
import {
  addInfra,
  getInfra,
  deleteInfra,
} from "../controllers/infrastructureController.js";

const router = express.Router();

router.post("/", upload.single("image"), addInfra);
router.get("/", getInfra);
router.delete("/:id", deleteInfra);

export default router;