import Infrastructure from "../models/Infrastructure.js";

// Add Infra
export const addInfra = async (req, res) => {
  try {
    const newInfra = new Infrastructure({
      image: req.file.filename,
      title: req.body.title,
      desc: req.body.desc,
    });

    await newInfra.save();
    res.status(201).json(newInfra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Infra
export const getInfra = async (req, res) => {
  const data = await Infrastructure.find().sort({ createdAt: -1 });
  res.json(data);
};

// Delete
export const deleteInfra = async (req, res) => {
  await Infrastructure.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};