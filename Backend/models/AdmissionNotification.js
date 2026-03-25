import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  title: String,          // Heading
  description: String,    // Main content
  startDate: String,      // Start date
  endDate: String,        // Last date
  image: String           // Optional image
});

export default mongoose.model("AdmissionNotification", admissionSchema);