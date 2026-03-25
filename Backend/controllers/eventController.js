import Event from "../models/Event.js";

// ➕ ADD EVENT
export const addEvent = async (req, res) => {
  try {
    const newEvent = await Event.create({
      title: req.body.title,
      image: req.file.filename,
    });

    res.json(newEvent);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 📥 GET EVENTS
export const getEvents = async (req, res) => {
  try {
    const data = await Event.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ❌ DELETE
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};