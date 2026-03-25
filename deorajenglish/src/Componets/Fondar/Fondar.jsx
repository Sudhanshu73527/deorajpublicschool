import React from "react";
import { motion } from "framer-motion";
// import principalImg from "../../assets/shri1.png";

const Principal = () => {
  return (
    <section className="relative w-full bg-[#0b1220] py-32 px-4 overflow-hidden">
      
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.10),transparent_45%),radial-gradient(circle_at_85%_85%,rgba(34,197,94,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center"
        >
          
          {/* CONTENT */}
          <motion.div
            initial={{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-white"
          >
            <span className="inline-block text-[11px] tracking-[0.45em] uppercase text-yellow-400 mb-8">
              Director Message
            </span>

            <h2 className="text-4xl sm:text-5xl xl:text-[56px] font-medium leading-[1.15] mb-10">
              Educating Minds. <br />
              Shaping Character. <br />
              Building the Future.
            </h2>

            <div className="w-28 h-[1.5px] bg-emerald-400 mb-10 opacity-80" />

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
              True education is a journey that transforms learners into leaders.
              At our institution, we go beyond academics to cultivate discipline,
              integrity, confidence, and purpose in every student.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
              Our academic framework blends time-tested values with modern
              pedagogy, ensuring that students develop critical thinking,
              adaptability, and a lifelong love for learning.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              With committed educators and supportive parents, we create an
              environment where excellence is nurtured, effort is respected,
              and success is achieved with humility.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-10 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#0b1220] bg-yellow-400 overflow-hidden group"
              >
                <span className="relative z-10">Read Full Vision</span>
                <span className="absolute inset-0 bg-emerald-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </motion.button>

              <div className="border-l border-emerald-400/40 pl-6">
                <p className="text-lg font-semibold text-white">
                 Er. Mr. Afroz Alam
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Director
                </p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: 90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              
              {/* Offset frame */}
              <div className="absolute -top-8 -left-8 w-full h-full border border-emerald-400/40"></div>

              {/* Image */}
              <img
                src={"/dev3.png"}
                alt="Principal"
                className="relative w-[300px] sm:w-[380px] xl:w-[440px] hover:grayscale  transition duration-700"
              />

              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-700"></div>

              {/* Caption */}
              <div className="absolute -bottom-12 left-0 text-xs tracking-[0.3em] uppercase text-gray-400">
                Leadership Rooted in Values
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Principal;
