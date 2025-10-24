import React from "react";
import ElectricBorder from "./ElectricBorder";

const Specialization = () => {
  const services = [
    { title: "Grow Your Ecommerce", desc: "We help your online business scale by improving visibility, conversions, and sales." },
    { title: "Digital Marketing", desc: "Boost your brand’s reach with SEO, social media, and paid campaigns." },
    { title: "Free Support", desc: "Our dedicated team offers round-the-clock support for your needs." },
    { title: "Web Development", desc: "We design and develop responsive, modern websites for your brand." },
    { title: "App Development", desc: "Build fast, user-friendly mobile apps for Android and iOS." },
    { title: "BPO Services", desc: "Enhance efficiency and cut costs with our outsourcing solutions." },
  ];

  return (
    <div className="bg-[#1F3455] py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-yellow-500 text-4xl sm:text-5xl font-bold mb-12">
        Our Specialization
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ElectricBorder
            key={i}
            color="#7df9ff"
            speed={1}
            chaos={1}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div className="bg-[#243553] rounded-lg p-6 text-white text-center">
              <h3 className="text-yellow-400 text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-gray-300">{s.desc}</p>
            </div>
          </ElectricBorder>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
