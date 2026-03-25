import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const phoneNumber = "917352205506"; // 👈 apna WhatsApp number daal (91 + number)

    const text = `Hello, my name is ${form.name}. ${form.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Contact Us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 mb-5 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition"
          >
            {/* <FaWhatsapp className="text-xl" /> */}
            Send Enquiry 
          </button>
        </form>

        {/* Note */}
        <p className="text-gray-400 text-sm text-center mt-4">
          We will respond to you as soon as possible on WhatsApp.
        </p>
      </motion.div>

    </section>
  );
};

export default Contact;