import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/dev1.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* GRADIENT LIGHT */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-white text-center lg:text-left"
        >

          {/* BADGE */}
          <div className="inline-block bg-green-500/20 border border-green-400 px-4 py-1 rounded-full text-sm backdrop-blur-lg">
            Welcome to Deoraj Public English School
          </div>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Building Bright
            <span className="block text-green-400">
              Futures Through Education
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-200 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            At Deoraj Public English School we nurture young minds with
            quality education, discipline, creativity and leadership skills
            to help every student achieve success in life.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
          
          <Link to={"/online-registration"}>
            <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105 cursor-pointer">
              Apply for Admission
            </button>
            </Link>

          <Link to={"/about-school"}>
            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Explore School
            </button>
            </Link>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-sm mx-auto lg:mx-0">

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                400+
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">Students</p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                20+
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">Teachers</p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
                25+
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">Classes</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="hidden lg:flex justify-center"
        >

          <div className="relative">

            <img
              src="/dev2.png"
              className="rounded-3xl shadow-2xl w-[420px]"
            />

            {/* FLOAT CARD */}
            <div className="absolute -top-8 -left-10 bg-white p-4 rounded-xl shadow-xl w-44">
              <p className="text-sm font-semibold text-gray-700">
                Smart Classrooms
              </p>
            </div>

            <div className="absolute bottom-10 -right-12 bg-white p-4 rounded-xl shadow-xl w-44">
              <p className="text-sm font-semibold text-gray-700">
                Sports & Activities
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Herosection;





















// import React from "react";
// import { motion } from "framer-motion";

// const Herosection = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-24">

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >

//           <span className="text-green-600 font-semibold uppercase tracking-widest">
//             Welcome to Deoraj Public English School
//           </span>

//           <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight text-gray-900">
//             A Place Where
//             <span className="text-green-600"> Learning </span>
//             Builds Future Leaders
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg max-w-xl">
//             Our school provides quality education, modern classrooms, and a
//             nurturing environment where students grow academically, socially,
//             and creatively.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex gap-4 mt-8 flex-wrap">

//             <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition">
//               Apply for Admission
//             </button>

//             <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
//               Explore Campus
//             </button>

//           </div>

//         </motion.div>

//         {/* RIGHT SIDE IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >

//           <img
//             src="/dev1.png"
//             className="rounded-3xl shadow-2xl"
//           />

//           {/* SMALL FLOAT CARD */}
//           <div className="absolute -bottom-6 left-10 bg-white shadow-xl p-4 rounded-xl w-48">
//             <h3 className="font-bold text-green-600">400+ Students</h3>
//             <p className="text-sm text-gray-600">Learning Together</p>
//           </div>

//           <div className="absolute top-10 -right-8 bg-white shadow-xl p-4 rounded-xl w-48">
//             <h3 className="font-bold text-green-600">20+ Teachers</h3>
//             <p className="text-sm text-gray-600">Experienced Faculty</p>
//           </div>

//         </motion.div>

//       </div>

//       {/* BOTTOM FEATURE CARDS */}
//       <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8">

//         <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
//           <h3 className="font-bold text-lg text-green-600">
//             Smart Classrooms
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Modern digital classrooms to enhance learning experience.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
//           <h3 className="font-bold text-lg text-green-600">
//             Sports Activities
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Physical activities that build strength and teamwork.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
//           <h3 className="font-bold text-lg text-green-600">
//             Cultural Programs
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Events that develop creativity and confidence.
//           </p>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default Herosection;