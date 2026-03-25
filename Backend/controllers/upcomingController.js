import UpcomingEvent from "../models/UpcomingEvent.js";

// ➕ ADD
export const addUpcoming = async (req, res) => {
  try {
    const data = await UpcomingEvent.create({
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      image: req.file.filename,
    });

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 📥 GET
export const getUpcoming = async (req, res) => {
  try {
    const data = await UpcomingEvent.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ❌ DELETE
export const deleteUpcoming = async (req, res) => {
  try {
    await UpcomingEvent.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};