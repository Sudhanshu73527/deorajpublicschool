import React, { useState, useEffect } from "react";

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [admissionData, setAdmissionData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("admissionData"));
    setAdmissionData(data);
    if (data?.fatherName) setFatherName(data.fatherName);
  }, []);

  const handleWhatsApp = () => {
    if (!paymentStatus || !fatherName) {
      alert("Please fill all details");
      return;
    }

    const message = `
New Admission Form:

Student Name: ${admissionData?.studentName}
Father Name: ${fatherName}
Mobile: ${admissionData?.mobile}
Class: ${admissionData?.class}

Payment Done: ${paymentStatus}
`;

    const url = `https://wa.me/917352205506?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Complete Payment
        </h1>

        {/* QR */}
        <div className="flex justify-center mb-6">
          <img
            src="/qr.png"
            alt="QR"
            className="w-60 h-60 border rounded-xl"
          />
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            placeholder="Father Name"
            className="input"
          />

          <select
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
            className="input"
          >
            <option value="">Payment Done?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-700 text-white py-3 rounded-xl"
          >
            Submit Registraion 
          </button>
        </div>
      </div>

      <style>
        {`
        .input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 10px;
        }
        `}
      </style>
    </section>
  );
};

export default Payment;