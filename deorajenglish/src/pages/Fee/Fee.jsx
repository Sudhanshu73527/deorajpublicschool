import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Fee = () => {
  const [classFees, setClassFees] = useState([]);
  const [transportFees, setTransportFees] = useState([]);

  const fetchFees = async () => {
    const res = await axios.get("https://deorajpublicschool.onrender.com/api/fees");

    const classData = res.data.filter(f => f.type === "class");
    const transportData = res.data.filter(f => f.type === "transport");

    setClassFees(classData);
    setTransportFees(transportData);
  };

  useEffect(() => {
    fetchFees();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        <motion.h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Fee Structure
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* CLASS FEE */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Student Fee
            </h2>

            {classFees.map((item) => (
              <div key={item._id} className="flex justify-between p-2">
                <span>{item.name}</span>
                <span>{item.fee}</span>
              </div>
            ))}
          </div>

          {/* TRANSPORT */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Transport Fee
            </h2>

            {transportFees.map((item) => (
              <div key={item._id} className="flex justify-between p-2">
                <span>{item.name}</span>
                <span>{item.fee}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fee;