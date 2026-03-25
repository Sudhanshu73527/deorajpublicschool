import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
  title: String,
  desc: String,
  date: String,
  type: String, // announcement | achievement | event
});

export default mongoose.model("Update", updateSchema);