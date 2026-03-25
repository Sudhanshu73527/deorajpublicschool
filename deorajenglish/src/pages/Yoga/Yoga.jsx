import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHeartbeat, FaSpa } from "react-icons/fa";

const Yoga = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-green-100 via-emerald-200 to-green-300 text-gray-800 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500 opacity-30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-green-900"
        >
          Yoga & Wellness Program
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-green-800 max-w-2xl mx-auto text-lg"
        >
          We promote a healthy lifestyle through yoga, helping students achieve
          mental peace, physical fitness, and inner balance.
        </motion.p>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/40 backdrop-blur-lg border border-green-200 rounded-3xl p-8 md:p-12 shadow-xl"
      >
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <FaLeaf className="text-green-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Daily Yoga Practice
            </h3>
            <p className="text-green-900">
              Regular yoga sessions help students stay active, flexible, and
              energized throughout the day.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <FaHeartbeat className="text-emerald-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Health & Mindfulness
            </h3>
            <p className="text-green-900">
              Yoga improves concentration, reduces stress, and enhances overall
              mental and physical well-being.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <FaSpa className="text-lime-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Peaceful Environment
            </h3>
            <p className="text-green-900">
              We provide a calm and refreshing environment where students can
              connect with nature and themselves.
            </p>
          </div>

        </div>
      </motion.div>

      {/* Highlight Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <p className="inline-block px-6 py-3 bg-green-600 text-white rounded-full text-sm md:text-base font-medium shadow-lg">
          🌿 Healthy Body • Calm Mind • Happy Life 🧘‍♂️
        </p>
      </motion.div>

    </section>
  );
};

export default Yoga;