import express from "express";
import { upload } from "../middleware/upload.js";
import {
  uploadSchoolImage,
  getSchoolImages,
  deleteSchoolImage,
} from "../controllers/schoolGalleryController.js";

const router = express.Router();

router.post("/", upload.single("image"), uploadSchoolImage);
router.get("/", getSchoolImages);
router.delete("/:id", deleteSchoolImage);

export default router;