import express from "express";
import {
  uploadImage,
  getImages,
  deleteImage,
} from "../controllers/galleryController.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.get("/all", getImages);
router.delete("/delete/:id", deleteImage);

export default router;