import React from "react";
import { motion } from "framer-motion";

const Aboutschool = () => {
  return (
    <section className="relative w-full bg-[#0b1220] py-20 md:py-28 px-6 overflow-hidden">

      {/* Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.07),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(16,185,129,0.08),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center"
        >

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >

            <div className="relative">

              <div className="absolute -bottom-5 -right-5 w-full h-full border border-amber-400/40"></div>

              <img
                src="/dev1.png"
                alt="School Campus"
                className="relative w-[400px] sm:w-[400px] md:w-[400px] xl:w-[440px]  hover:grayscale-0 transition duration-700"
              />

              <div className="absolute -top-5 left-0 bg-amber-400 text-[#0b1220] text-[10px] tracking-widest px-4 py-1 uppercase font-semibold">
                Since 2016
              </div>

            </div>

          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 text-center lg:text-left text-white"
          >

            <span className="block text-[10px] tracking-[0.35em] uppercase text-amber-400 mb-6">
              About Our School
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-medium leading-[1.2] mb-8">
              Building Knowledge. <br />
              Shaping Character.
            </h2>

            <div className="w-20 h-[1.5px] bg-amber-400 mb-8 mx-auto lg:mx-0 opacity-80" />

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Deoraj Public English School was founded with a vision to provide
              quality education and strong moral values to every child in our
              community. The institution was established with the belief that
              education is the foundation of a progressive and enlightened
              society.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Over the years, the school has grown into a center of academic
              excellence where students develop knowledge, discipline,
              creativity, and leadership skills that prepare them for the
              future.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Our mission is not only to educate students academically but also
              to nurture responsible citizens who can contribute positively to
              society and become leaders of tomorrow.
            </p>

            {/* BUTTON */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-8 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#0b1220] bg-amber-400 overflow-hidden group mx-auto lg:mx-0"
            >
              <span className="relative z-10">Explore Our Story</span>
              <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </motion.button>

          </motion.div>

        </motion.div>

        {/* SCHOOL STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-12 text-center"
        >

          {[
            { value: "10+", label: "Years of Excellence" },
            { value: "400+", label: "Students" },
            { value: "20+", label: "Qualified Teachers" },
            { value: "100%", label: "Dedication" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-2xl sm:text-3xl font-semibold text-amber-400">
                {item.value}
              </p>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase text-gray-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Aboutschool;