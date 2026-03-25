import AdmissionNotification from "../models/AdmissionNotification.js";

// ➕ ADD
export const addAdmission = async (req, res) => {
  try {
    const data = await AdmissionNotification.create({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      image: req.file ? req.file.filename : "",
    });

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 📥 GET ALL
export const getAdmissions = async (req, res) => {
  try {
    const data = await AdmissionNotification.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ❌ DELETE
export const deleteAdmission = async (req, res) => {
  try {
    await AdmissionNotification.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};