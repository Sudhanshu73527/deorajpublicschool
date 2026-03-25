import StaffDetails from "../models/StaffDetails.js";

// Add Staff
export const addStaff = async (req, res) => {
  try {
    const newStaff = new StaffDetails(req.body);
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Staff
export const getStaff = async (req, res) => {
  const staff = await StaffDetails.find().sort({ createdAt: -1 });
  res.json(staff);
};

// Delete Staff
export const deleteStaff = async (req, res) => {
  await StaffDetails.findByIdAndDelete(req.params.id);
  res.json({ message: "Staff Deleted" });
};