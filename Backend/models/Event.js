import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  image: String,
});

export default mongoose.model("Event", eventSchema);