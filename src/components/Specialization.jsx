import React from "react";

const Specialization = () => {
  const services = [
    {
      title: "Grow Your Ecommerce",
      desc: "We help your online business scale by improving visibility, conversions, and sales through data-driven strategies.",
    },
    {
      title: "Digital Marketing",
      desc: "Boost your brand’s reach with SEO, social media, and paid campaigns designed for measurable growth.",
    },
    {
      title: "Free Support",
      desc: "Our dedicated team offers round-the-clock support to assist you with all technical and operational needs.",
    },
    {
      title: "Web Development",
      desc: "We design and develop modern, responsive websites that represent your brand and engage your audience.",
    },
    {
      title: "App Development",
      desc: "Build fast, user-friendly, and scalable mobile apps for Android and iOS tailored to your business goals.",
    },
    {
      title: "BPO Services",
      desc: "Enhance efficiency and cut costs with our professional outsourcing solutions for your business operations.",
    },
  ];

  return (
   <div className="bg-[#F6F6F6]">
    <div className=" w-full max-w-[1340px] mx-auto  py-16 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-center text-yellow-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
         Specialization
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#243553] border-2 border-yellow-500 rounded-lg p-6 shadow-md 
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] 
                       transition-all duration-300 text-white"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-gray-300 text-center leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
   </div> 
  );
};

export default Specialization;
