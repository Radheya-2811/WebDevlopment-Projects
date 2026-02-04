import React from "react";
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION (Header is now separate) */}
      <section
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      >
        {/* Overlay */}
        <div className="min-h-screen bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-xl md:text-6xl font-bold text-white mb-60">
              <span className="text-[#1b3474]">ProStafff</span>-boutique luxury retail HR consultancy
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;