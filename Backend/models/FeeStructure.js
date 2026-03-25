import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["class", "transport"],
    required: true,
  },
  name: {
    type: String, // Nursery / Zone A
    required: true,
  },
  fee: {
    type: String, // ₹1500/month
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("FeeStructure", feeSchema);