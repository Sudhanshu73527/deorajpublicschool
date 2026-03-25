import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaFileAlt, FaClipboardCheck, FaSchool } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Registration",
    desc: "Fill the admission form online or offline with basic student details.",
  },
  {
    icon: <FaFileAlt />,
    title: "Document Submission",
    desc: "Submit required documents like Birth Certificate, Aadhaar, Photos, etc.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Verification & Interaction",
    desc: "School verifies documents and may conduct a short interaction/test.",
  },
  {
    icon: <FaSchool />,
    title: "Admission Confirmation",
    desc: "Pay the fees and confirm the admission to secure the seat.",
  },
];

const Admissionstru = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admission Structure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple and transparent admission process designed for your convenience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition text-center relative"
            >

              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-4xl text-green-600 mb-4 mt-6">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            For any queries, please contact our admission office or visit the campus.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Admissionstru;