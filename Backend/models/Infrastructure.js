import mongoose from "mongoose";

const infraSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Infrastructure", infraSchema);