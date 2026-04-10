import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const classes = [1,2,3,4,5,6,7,8,9,10];
const PAGE_SIZE = 20;

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [activeClass, setActiveClass] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://deorajpublicschool.onrender.com/api/students/all").then((res) => setStudents(res.data));
  }, []);

  // reset page on filter/search change
  useEffect(() => {
    setPage(1);
  }, [search, activeClass]);

  // group count per class
  const classCounts = useMemo(() => {
    const map = {};
    classes.forEach(c => (map[c] = 0));
    students.forEach(s => {
      if (map[s.className] !== undefined) map[s.className]++;
    });
    return map;
  }, [students]);

  const filtered = useMemo(() => {
    return students.filter((s) => {
      const bySearch = s.name.toLowerCase().includes(search.toLowerCase());
      const byClass = activeClass === "" || String(s.className) === String(activeClass);
      return bySearch && byClass;
    });
  }, [students, search, activeClass]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const startIndex = (page - 1) * PAGE_SIZE;
  const currentPageData = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Students Details</h1>
          <p className="text-gray-500">Manage and explore students by class</p>
        </div>

        <button
          onClick={() => navigate("/add")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition cursor-pointer"
        >
          Add Student
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* CLASS CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveClass("")}
          className={`cursor-pointer rounded-2xl p-4 shadow-md text-center border transition ${
            activeClass === "" ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-50"
          }`}
        >
          <p className="font-semibold">All</p>
          <p className="text-sm opacity-80">{students.length} Students</p>
        </motion.div>

        {classes.map((c) => (
          <motion.div
            key={c}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveClass(String(c))}
            className={`cursor-pointer rounded-2xl p-4 shadow-md text-center border transition ${
              String(activeClass) === String(c)
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            <p className="font-semibold">Class {c}</p>
            <p className="text-sm opacity-80">{classCounts[c]} Students</p>
          </motion.div>
        ))}
      </div>

      {/* LIST */}
      <div className="bg-white rounded-2xl shadow-xl p-4">
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-6">No students found</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentPageData.map((stu) => (
                <motion.div
                  key={stu._id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/student/${stu._id}`)}
                  className="cursor-pointer border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-gradient-to-br from-white to-slate-50"
                >
                  <h2 className="font-semibold text-gray-800">{stu.name}</h2>
                  <p className="text-sm text-gray-500">Class {stu.className}</p>
                  <p className="text-sm text-gray-600 mt-1">₹ {stu.totalFee}</p>
                </motion.div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <p className="text-sm text-gray-500">
                Showing {startIndex + 1} - {Math.min(startIndex + PAGE_SIZE, filtered.length)} of {filtered.length}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="px-3 py-1 rounded-lg border bg-white disabled:opacity-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .slice(Math.max(0, page - 3), page + 2)
                  .map((p) => (
                    <button
                      key={p}
                      onClick={() => goToPage(p)}
                      className={`px-3 py-1 rounded-lg border ${
                        p === page ? "bg-blue-600 text-white" : "bg-white"
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="px-3 py-1 rounded-lg border bg-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentList;
