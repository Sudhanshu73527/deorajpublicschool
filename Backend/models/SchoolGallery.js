import mongoose from "mongoose";

const schoolGallerySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "School Image",
  },
}, { timestamps: true });

export default mongoose.model("SchoolGallery", schoolGallerySchema);