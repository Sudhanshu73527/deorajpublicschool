import SchoolGallery from "../models/SchoolGallery.js";

// Upload Image
export const uploadSchoolImage = async (req, res) => {
  try {
    const newImage = new SchoolGallery({
      image: req.file.filename,
      title: req.body.title,
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Images
export const getSchoolImages = async (req, res) => {
  const images = await SchoolGallery.find().sort({ createdAt: -1 });
  res.json(images);
};

// Delete Image
export const deleteSchoolImage = async (req, res) => {
  await SchoolGallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Image Deleted Successfully" });
};