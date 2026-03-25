import FeeStructure from "../models/FeeStructure.js";

// Add Fee
export const addFee = async (req, res) => {
  try {
    const newFee = new FeeStructure(req.body);
    await newFee.save();
    res.status(201).json(newFee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Fees
export const getFees = async (req, res) => {
  const fees = await FeeStructure.find();
  res.json(fees);
};

// Delete Fee
export const deleteFee = async (req, res) => {
  await FeeStructure.findByIdAndDelete(req.params.id);
  res.json({ message: "Fee Deleted" });
};