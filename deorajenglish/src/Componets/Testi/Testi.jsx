import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

// ✅ Testimonials Data
const testimonialsData = [
  {
    name: "Rahul Kumar",
    role: "Parent",
    message:
      "Deoraj Public English School ne mere bachche ki padhai aur discipline dono improve kiya hai.",
  },
  {
    name: "Pooja Singh",
    role: "Parent",
    message:
      "Yaha ke teachers bahut supportive hain aur har student pe dhyaan dete hain.",
  },
  {
    name: "Amit Verma",
    role: "Guardian",
    message:
      "School ka environment bahut safe aur learning-friendly hai.",
  },
  {
    name: "Neha Kumari",
    role: "Parent",
    message:
      "Mujhe sabse achha laga ki yaha moral values bhi sikhayi jati hain.",
  },
  {
    name: "Rakesh Yadav",
    role: "Parent",
    message:
      "Best school in our area. Facilities aur education dono top class hai.",
  },
];

// 🎨 Soft Color Themes
const cardColors = [
  "bg-blue-50 border-blue-500",
  "bg-pink-50 border-pink-500",
  "bg-green-50 border-green-500",
  "bg-purple-50 border-purple-500",
  "bg-yellow-50 border-yellow-500",
];

const avatarColors = [
  "bg-blue-800",
  "bg-pink-800",
  "bg-green-800",
  "bg-purple-800",
  "bg-yellow-800",
];

const Testi = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            What Parents Say 
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by 100+ happy parents
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border shadow-sm ${cardColors[index % cardColors.length]}`}
            >
              
              {/* Quote Icon */}
              <FaQuoteLeft className="text-2xl text-gray-400 mb-3" />

              {/* Stars */}
              <div className="flex mb-3 text-yellow-400">
                {"★★★★★"}
              </div>

              {/* Message */}
              <p className="text-gray-700 italic mb-5">
                “{item.message}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold ${avatarColors[index % avatarColors.length]}`}
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-600">
                    {item.role}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testi;