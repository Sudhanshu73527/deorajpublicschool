import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://deorajpublicschool.onrender.com/api/students/all");
      setStudent(res.data.find((s) => s._id === id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateFee = async (month) => {
    const amount = prompt("Enter amount");
    if (!amount) return;

    try {
      setLoading(true);
      await axios.put("https://deorajpublicschool.onrender.com/api/students/update-fee", {
        studentId: id,
        month,
        amount,
      });
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Error updating fee");
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://deorajpublicschool.onrender.com/api/students/delete/${id}`);
      navigate("/list");
    } catch (err) {
      console.error(err);
    }
  };

  if (!student)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate("/list")}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
        >
          ⬅ Back
        </button>

        <button
          onClick={deleteStudent}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>

      {/* STUDENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-6 mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">
          {student.name}
        </h1>
        <p className="text-gray-500 mt-1">Class {student.className}</p>

        {/* TOTAL FEE */}
        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-gray-500">Monthly Fee</p>
          <h2 className="text-xl font-semibold text-blue-600">
            ₹ {student.totalFee}
          </h2>
        </div>
      </motion.div>

      {/* FEES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {student.fees.map((f) => {
          const remaining = student.totalFee - f.paid;
          const isPaid = remaining <= 0;

          return (
            <motion.div
              key={f.month}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md p-4 border"
            >
              <h3 className="font-semibold text-gray-700">{f.month}</h3>

              <div className="mt-2 text-sm">
                <p>
                  Paid: <span className="font-medium">₹ {f.paid}</span>
                </p>
                <p>
                  Remaining:{" "}
                  <span
                    className={`font-medium ${
                      isPaid ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    ₹ {remaining}
                  </span>
                </p>
              </div>

              {/* STATUS */}
              <div className="mt-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    isPaid
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {isPaid ? "Paid" : "Pending"}
                </span>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => updateFee(f.month)}
                disabled={loading}
                className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
              >
                {loading ? "Processing..." : "Pay Fee"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentDetails;