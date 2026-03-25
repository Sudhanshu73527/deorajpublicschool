import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1f3f8a] to-[#274ea3] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3">
        {/* Column 1 */}
        <div className="group px-10 py-16 border-b md:border-b-0 md:border-r border-white/20 hover:bg-white/5 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Download Prospectus</h2>

          <p className="text-sm text-gray-200 mb-8 leading-relaxed max-w-sm">
            Get a complete look at our curriculum, facilities, and student life
            through an easy to read prospectus.
          </p>

          <button className="flex items-center gap-2 bg-white text-[#1f3f8a] px-6 py-3 text-sm font-medium rounded-sm transition-all duration-300 group-hover:gap-3 hover:shadow-lg cursor-pointer">
            Download
            <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Column 2 */}
        <div className="group px-10 py-16 border-b md:border-b-0 md:border-r border-white/20 hover:bg-white/5 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Admission Enquiry</h2>

          <p className="text-sm text-gray-200 mb-8 leading-relaxed max-w-sm">
            Start your child's journey with a simple online form and prompt
            personal guidance from our admission team.
          </p>

          <Link to={"/contact"}>
            <button className="flex items-center gap-2 bg-white text-[#1f3f8a] px-6 py-3 text-sm font-medium rounded-sm transition-all duration-300 group-hover:gap-3 hover:shadow-lg cursor-pointer">
              Enquire Now
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>
        </div>

        {/* Column 3 */}
        <div className="group px-10 py-16 hover:bg-white/5 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Schedule a Campus Visit
          </h2>

          <p className="text-sm text-gray-200 mb-8 leading-relaxed max-w-sm">
            Walk through our campus spaces and see how learning comes alive
            every single day.
          </p>

          <button className="flex items-center gap-2 bg-white text-[#1f3f8a] px-6 py-3 text-sm font-medium rounded-sm transition-all duration-300 group-hover:gap-3 hover:shadow-lg cursor-pointer">
            Schedule Now
            <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
