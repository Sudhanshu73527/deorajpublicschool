import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminFeePanel = () => {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    className: "",
    totalFee: "",
  });

  // ================= FETCH STUDENTS =================
  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/students/all"
      );
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ================= ADD STUDENT =================
  const handleAddStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/students/add",
        form
      );

      alert("Student Added ✅");

      setForm({
        name: "",
        className: "",
        totalFee: "",
      });

      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  // ================= UPDATE FEE =================
  const updateFee = async (studentId, month) => {
    const amount = prompt("Enter amount");

    if (!amount) return;

    try {
      await axios.put(
        "http://localhost:5000/api/students/update-fee",
        {
          studentId,
          month,
          amount,
        }
      );

      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  // ================= DELETE STUDENT =================
  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/students/delete/${id}`
      );

      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* ================= HEADER ================= */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Student Fee Management
      </h1>

      {/* ================= ADD FORM ================= */}
      <form
        onSubmit={handleAddStudent}
        className="bg-white p-6 rounded-xl shadow-md mb-8 grid md:grid-cols-4 gap-4"
      >
        <input
          type="text"
          placeholder="Student Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Class"
          value={form.className}
          onChange={(e) =>
            setForm({ ...form, className: e.target.value })
          }
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Monthly Fee"
          value={form.totalFee}
          onChange={(e) =>
            setForm({ ...form, totalFee: e.target.value })
          }
          className="border p-2 rounded"
          required
        />

        <button className="bg-blue-600 text-white rounded">
          Add Student
        </button>
      </form>

      {/* ================= STUDENT LIST ================= */}
      {students.map((stu) => (
        <div
          key={stu._id}
          className="bg-white p-6 rounded-xl shadow mb-6"
        >

          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">
                {stu.name} ({stu.className})
              </h2>
              <p className="text-gray-600">
                Monthly Fee: ₹{stu.totalFee}
              </p>
            </div>

            <button
              onClick={() => deleteStudent(stu._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>

          {/* MONTH LIST */}
          <div className="grid md:grid-cols-2 gap-3">

            {stu.fees.map((f) => {
              const remaining = stu.totalFee - f.paid;

              return (
                <div
                  key={f.month}
                  className="border p-3 rounded flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{f.month}</p>
                    <p className="text-sm text-gray-600">
                      Paid: ₹{f.paid}
                    </p>
                    <p className="text-sm text-red-500">
                      Remaining: ₹{remaining}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      updateFee(stu._id, f.month)
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Pay
                  </button>
                </div>
              );
            })}

          </div>
        </div>
      ))}

    </div>
  );
};

export default AdminFeePanel;