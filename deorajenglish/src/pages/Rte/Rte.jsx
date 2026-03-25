import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaFileDownload } from "react-icons/fa";

const Rte = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Right to Education (RTE)
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ensuring equal access to quality education for every child under the RTE Act.
          </p>
        </div>

        {/* Main Box */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-green-100">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                About the RTE Act
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                The Right to Education Act ensures free and compulsory education 
                for children aged 6 to 14 years. Our school strictly follows all 
                RTE guidelines and is committed to providing equal opportunities 
                to every child, regardless of background.
              </p>

              {/* Points */}
              <div className="space-y-4">
                {[
                  "25% seats reserved under RTE quota",
                  "Free education for eligible students",
                  "Inclusive and equal learning environment",
                  "Government-approved admission process",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
             
            </motion.div>

            {/* Right Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition"
              >
                <h4 className="text-3xl font-bold text-green-600 mb-2">
                  25%
                </h4>
                <p className="text-gray-700 text-sm">
                  Seats Reserved under RTE
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition"
              >
                <h4 className="text-3xl font-bold text-green-600 mb-2">
                  6–14
                </h4>
                <p className="text-gray-700 text-sm">
                  Age Group Covered
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition"
              >
                <h4 className="text-3xl font-bold text-green-600 mb-2">
                  100%
                </h4>
                <p className="text-gray-700 text-sm">
                  Free Education
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition"
              >
                <h4 className="text-3xl font-bold text-green-600 mb-2">
                  Equal
                </h4>
                <p className="text-gray-700 text-sm">
                  Opportunity for All
                </p>
              </motion.div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Rte;