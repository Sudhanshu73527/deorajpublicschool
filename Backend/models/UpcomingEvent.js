import mongoose from "mongoose";

const upcomingSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  image: String,
});

export default mongoose.model("UpcomingEvent", upcomingSchema);