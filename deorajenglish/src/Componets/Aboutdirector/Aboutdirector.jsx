import React from "react";
import { motion } from "framer-motion";
// import chairmanImg from "../../assets/pathak.jpeg";

const Chairman = () => {
  return (
    <section className="relative w-full bg-[#0b1220] py-32 px-4 overflow-hidden">

      {/* Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(245,158,11,0.08),transparent_40%),radial-gradient(circle_at_90%_85%,rgba(16,185,129,0.08),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center"
        >

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative">

              {/* Gold frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-amber-400/40"></div>

              <img
                src={"/dev4.png"}
                alt="Chairman"
                className="relative w-[300px] sm:w-[380px] xl:w-[440px]  hover:grayscale-0 transition duration-700"
              />

              {/* Tag */}
              <div className="absolute -top-6 left-0 bg-amber-400 text-[#0b1220] text-xs tracking-widest px-5 py-2 uppercase font-semibold">
                Founder & Chairman 
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-white"
          >
            <span className="block text-[11px] tracking-[0.45em] uppercase text-amber-400 mb-8">
              Message from the Foundar and Chairperson
            </span>

            <h2 className="text-4xl sm:text-5xl xl:text-[56px] font-medium leading-[1.15] mb-10">
              Vision Today. <br />
              Legacy Tomorrow.
            </h2>

            <div className="w-28 h-[1.5px] bg-amber-400 mb-10 opacity-80" />

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
              Education is the most powerful investment we can make for the
              future. As Chairman, my vision has always been to build an
              institution that stands for integrity, excellence, and
              progressive thinking.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
              Our school is founded on the belief that students must be prepared
              not only for academic success, but also for leadership,
              responsibility, and meaningful contribution to society.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
              With strong values, dedicated educators, and a clear vision, we
              continue to shape generations who will define the future with
              confidence and character.
            </p>

            {/* SIGNATURE + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-10 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#0b1220] bg-amber-400 overflow-hidden group"
              >
                <span className="relative z-10">Read Full Vision</span>
                <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </motion.button>

              <div className="border-l border-amber-400/40 pl-6">
                <p className="text-lg font-semibold text-white">
                  Md. Ishqullah sb
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Founder & Chairperson 
                </p>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Chairman;
