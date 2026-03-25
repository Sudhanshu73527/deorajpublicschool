import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Staff = () => {
  const [staffData, setStaffData] = useState([]);

  const fetchStaff = async () => {
    const res = await axios.get("http://localhost:5000/api/staff");
    setStaffData(res.data);
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
        >
          Our Teaching Staff
        </motion.h1>

        <div className="space-y-4">
          {staffData.map((staff, index) => (
            <motion.div
              key={staff._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col md:flex-row justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {staff.name}
                </h2>
                <p className="text-sm text-green-600 font-medium">
                  {staff.subject}
                </p>
              </div>

              <div className="mt-2 md:mt-0">
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {staff.experience}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Staff;