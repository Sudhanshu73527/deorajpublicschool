import SchoolGallery from "../models/SchoolGallery.js";

// ✅ UPLOAD
export const uploadSchoolImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "Image required ❌" });
    }

    const newImage = new SchoolGallery({
  image: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
  title: req.body.title || "School Image",
});

    await newImage.save();

    res.status(201).json(newImage);
  } catch (err) {
    console.log("UPLOAD ERROR:", err); // 🔥 MUST
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET
export const getSchoolImages = async (req, res) => {
  try {
    const images = await SchoolGallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    console.log("GET ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ DELETE
export const deleteSchoolImage = async (req, res) => {
  try {
    await SchoolGallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted ✅" });
  } catch (err) {
    console.log("DELETE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};