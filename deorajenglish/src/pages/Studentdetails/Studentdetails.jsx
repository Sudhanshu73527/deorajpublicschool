import React from "react";
import { motion } from "framer-motion";
import { Users, Award, BookOpen, School } from "lucide-react";

const Studentdetails = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-6 md:px-16">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Students Strength
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We proudly nurture a strong community of students with quality education,
          discipline, and modern learning facilities.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Total Students */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-2xl p-6 text-center border-t-4 border-blue-500"
        >
          <Users className="mx-auto text-blue-500 mb-4" size={40} />
          <h3 className="text-3xl font-bold text-gray-800">400+</h3>
          <p className="text-gray-600 mt-2">Happy Students</p>
        </motion.div>

        {/* Best Education */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-2xl p-6 text-center border-t-4 border-green-500"
        >
          <BookOpen className="mx-auto text-green-500 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-gray-800">Best Learning</h3>
          <p className="text-gray-600 mt-2">
            Quality Education in the Area
          </p>
        </motion.div>

        {/* Facilities */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-2xl p-6 text-center border-t-4 border-purple-500"
        >
          <School className="mx-auto text-purple-500 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-gray-800">Modern Facilities</h3>
          <p className="text-gray-600 mt-2">
            Smart Classes, Labs & Activities
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-2xl p-6 text-center border-t-4 border-yellow-500"
        >
          <Award className="mx-auto text-yellow-500 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-gray-800">Top Results</h3>
          <p className="text-gray-600 mt-2">
            Excellent Academic Performance
          </p>
        </motion.div>

      </div>

      {/* Bottom Description */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our school proudly hosts more than <span className="font-bold text-blue-600">400+ students </span> 
           and continues to grow as one of the most trusted educational institutions in the region. 
          We focus on overall development by providing high-quality education, experienced teachers, 
          and all modern facilities required for a bright future.
        </p>
      </div>

    </section>
  );
};

export default Studentdetails;