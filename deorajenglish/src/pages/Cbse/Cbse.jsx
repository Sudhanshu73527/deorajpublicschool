import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Cbse = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          CBSE Curriculum
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg"
        >
          The Central Board of Secondary Education (CBSE) is one of the most
          recognized education boards in India, known for its structured syllabus,
          national-level relevance, and student-friendly approach.
        </motion.p>
      </div>

      {/* What is CBSE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12"
      >
        <div className="flex items-start gap-4">
          <FaBookOpen className="text-blue-500 text-3xl mt-1" />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              What is CBSE?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              CBSE (Central Board of Secondary Education) is a national-level
              education board in India that follows a standardized curriculum
              designed to prepare students for competitive exams like JEE, NEET,
              and other national-level tests. It focuses on conceptual learning,
              practical knowledge, and overall student development.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Advantages & Disadvantages */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border-l-4 border-green-500"
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-600 flex items-center gap-2">
            <FaCheckCircle /> Advantages
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Nationally recognized curriculum</li>
            <li>✔ Focus on competitive exam preparation</li>
            <li>✔ Student-friendly and structured syllabus</li>
            <li>✔ Easy transfer between schools across India</li>
            <li>✔ Emphasis on Science and Mathematics concepts</li>
          </ul>
        </motion.div>

        {/* Disadvantages */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border-l-4 border-red-500"
        >
          <h3 className="text-2xl font-semibold mb-6 text-red-500 flex items-center gap-2">
            <FaTimesCircle /> Disadvantages
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li>✖ Less focus on regional languages</li>
            <li>✖ Limited flexibility in subject choices</li>
            <li>✖ More theoretical in some areas</li>
            <li>✖ Less emphasis on practical/creative fields</li>
            <li>✖ High competition pressure among students</li>
          </ul>
        </motion.div>

      </div>

      {/* Bottom Highlight */}
      <div className="mt-16 text-center">
        <p className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
          📘 CBSE = Strong Foundation for Future Success 🚀
        </p>
      </div>

    </section>
  );
};

export default Cbse;