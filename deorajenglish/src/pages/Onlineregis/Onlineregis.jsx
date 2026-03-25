import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Onlineregis = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    class: "",
    gender: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    aadhaar: "",
    address: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid || !agreed) return;

    localStorage.setItem("admissionData", JSON.stringify(formData));
    navigate("/payment");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-extrabold text-green-800">
            Online Admission Registration
          </h1>
          <p className="text-gray-600 mt-2">
            Secure your child's future by filling this form
          </p>

          <div className="mt-5 inline-block bg-yellow-100 border-l-4 border-yellow-500 px-6 py-3 rounded-lg shadow">
            <p className="text-yellow-800 font-semibold text-lg">
              Registration Fee: ₹1500 (Non-Refundable)
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 space-y-8"
        >
          {/* Student Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-5 border-b pb-2">
              Student Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="studentName"
                placeholder="Student Name"
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                className="input"
                required
              />

              <select
                name="class"
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Class</option>
                <option>Nursery</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>

              <select
                name="gender"
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          {/* Parent Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-5 border-b pb-2">
              Parent Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="fatherName"
                placeholder="Father Name"
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="motherName"
                placeholder="Mother Name"
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="aadhaar"
                placeholder="Aadhaar Number"
                onChange={handleChange}
                className="input"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-5 border-b pb-2">
              Address
            </h2>
            <textarea
              name="address"
              placeholder="Full Address"
              onChange={handleChange}
              className="input h-32"
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
            <input
              type="checkbox"
              disabled={!isFormValid}
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4"
            />
            <p className="text-sm text-gray-600">
              I confirm that all the details provided above are correct and I
              agree to proceed with the payment.
            </p>
          </div>

          {/* Button */}
          <button
            disabled={!isFormValid || !agreed}
            className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
              isFormValid && agreed
                ? "bg-green-700 text-white hover:bg-green-800 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Proceed to Payment
          </button>
        </motion.form>
      </div>

      {/* Custom Input Style */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            outline: none;
            transition: all 0.3s ease;
            background: #fff;
          }

          .input:focus {
            border-color: #15803d;
            box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.15);
          }
        `}
      </style>
    </section>
  );
};

export default Onlineregis;
