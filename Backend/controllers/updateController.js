import Update from "../models/Update.js";

// ➕ ADD
export const addUpdate = async (req, res) => {
  try {
    const data = await Update.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 📥 GET ALL
export const getUpdates = async (req, res) => {
  try {
    const data = await Update.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ❌ DELETE
export const deleteUpdate = async (req, res) => {
  try {
    await Update.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// ✏️ UPDATE
export const updateUpdate = async (req, res) => {
  try {
    const updated = await Update.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};