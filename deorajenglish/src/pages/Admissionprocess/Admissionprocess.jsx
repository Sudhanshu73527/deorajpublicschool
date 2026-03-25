import React from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaUniversity, FaCheckCircle } from "react-icons/fa";

const stepsOnline = [
  "Visit the official school website",
  "Fill the online admission form",
  "Upload required documents",
  "Submit the form and pay fees",
  "Receive confirmation via email/WhatsApp",
];

const stepsOffline = [
  "Visit the school campus",
  "Collect admission form from office",
  "Fill and submit the form",
  "Attach required documents",
  "Pay fees and confirm admission",
];

const Admissionprocess = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the most convenient way to apply for admission – online or offline.
          </p>
        </div>

        {/* Two Sections */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Online Admission */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-green-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaLaptop className="text-3xl text-green-600" />
              <h3 className="text-2xl font-semibold">Online Admission</h3>
            </div>

            <ul className="space-y-4">
              {stepsOnline.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition">
              Apply Online
            </button>
          </motion.div>

          {/* Offline Admission */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-green-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaUniversity className="text-3xl text-green-600" />
              <h3 className="text-2xl font-semibold">Offline Admission</h3>
            </div>

            <ul className="space-y-4">
              {stepsOffline.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-gray-800 hover:bg-black text-white py-3 rounded-full transition">
              Visit Campus
            </button>
          </motion.div>

        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            For any assistance, feel free to contact our admission office.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Admissionprocess;