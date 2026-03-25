import React from "react";
import { motion } from "framer-motion";

// ✅ Testimonials Data (same file me)
const testimonialsData = [
  {
    name: "Rahul Kumar",
    role: "Parent",
    message: "Deoraj Public English School ne mere bachche ki padhai aur discipline dono improve kiya hai."
  },
  {
    name: "Pooja Singh",
    role: "Parent",
    message: "Yaha ke teachers bahut supportive hain aur har student pe dhyaan dete hain."
  },
  {
    name: "Amit Verma",
    role: "Guardian",
    message: "School ka environment bahut safe aur learning-friendly hai."
  },
  {
    name: "Neha Kumari",
    role: "Parent",
    message: "Mujhe sabse achha laga ki yaha moral values bhi sikhayi jati hain."
  },
  {
    name: "Rakesh Yadav",
    role: "Parent",
    message: "Best school in our area. Facilities aur education dono top class hai."
  },
 
];

const Testi = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            What Parents Say ❤️
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by 100+ happy parents
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300"
            >
              
              {/* Stars */}
              <div className="flex mb-3 text-yellow-400">
                {"★★★★★"}
              </div>

              {/* Message */}
              <p className="text-gray-600 italic mb-5">
                “{item.message}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {item.role}
                  </span>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testi;