import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
  month: String,
  paid: {
    type: Number,
    default: 0,
  },
});

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      required: true,
      enum: ["1","2","3","4","5","6","7","8","9","10"],
    },

    totalFee: {
      type: Number,
      required: true,
    },

    fees: [feeSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);