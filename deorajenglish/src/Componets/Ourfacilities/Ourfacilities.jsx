import React from "react";
import {
  FaUniversity,
  FaGlobe,
  FaBook,
  FaHome,
  FaGraduationCap,
  FaUserTie,
  FaWifi,
  FaBriefcase,
  FaHorse,
  FaUserMd
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaUniversity />,
    title: "Pollution Free 52 Acres",
    desc: "Lush Green Campus",
  },
  
  {
    icon: <FaBook />,
    title: "Research-Based",
    desc: "Experiential Learning",
  },
  {
    icon: <FaHome />,
    title: "Air-Conditioned",
    desc: "Boarding Houses",
  },
  {
    icon: <FaGraduationCap />,
    title: "6:1 Student Teacher",
    desc: "Ratio",
  },

  {
    icon: <FaWifi />,
    title: "Wi-Fi Smart Classrooms",
    desc: "Monitored and Secure Campus",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Information",
    desc: "and Guidance Department",
  },
  {
    icon: <FaHorse />,
    title: "Sports Facilities",
    desc: "Cricket, Football and KhoKho",
  },
  {
    icon: <FaUserMd />,
    title: "Qualified Resident",
    desc: "Medical Team",
  },
];

const Facilities = () => {
  return (
    <section
      className="relative w-full py-20"
      style={{
        backgroundImage: "url('/dev1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center text-white mb-14">

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose DPES
          </h2>

          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Our institution provides world-class infrastructure, modern learning 
            facilities, and a nurturing environment that helps students achieve 
            academic excellence and personal growth.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="
              text-center text-white
              py-10 px-6
              border border-white/20
              flex flex-col items-center
              justify-center
              "
            >

              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-medium text-sm leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-gray-200 mt-1">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Facilities;