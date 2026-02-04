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
            <h1 className="text-xl md:text-6xl font-bold text-white mb-10 mt-0">
              <span className="text-[#1b3474]">ProStafff</span>-retail HR consultancy
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
              We specialise exclusively in luxury and premium retail recruitment, where brand representation, 
              client experience, and talent quality are critical. Our approach is discreet, detail-driven, 
              and highly selective ensuring every professional we present aligns with the brand's identity, 
              service standards, and long-term vision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;