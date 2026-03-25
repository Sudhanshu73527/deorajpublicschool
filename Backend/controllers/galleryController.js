import Gallery from "../models/Gallery.js";

// ➕ Upload Image
export const uploadImage = async (req, res) => {
  try {
    const newImage = await Gallery.create({
      image: req.file.filename,
    });

    res.json(newImage);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 📥 Get All Images
export const getImages = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ _id: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ❌ Delete Image
export const deleteImage = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};