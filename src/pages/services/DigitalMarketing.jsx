import React from "react";

const DigitalMarketing = () => {
  return (
    <section className="py-16 bg-[#1A3255]">
      <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Text Div Left */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 leading-snug">
            Grow Your Business <br />
            with Results-Driven <br />
            Digital Marketing Services
          </h2>

          <p className="text-lg md:text-base">
            Our Digital Marketing Services are designed to help businesses thrive in the online space by leveraging targeted strategies that deliver real results.
          </p>

          <p className="text-lg md:text-base">
            In today’s digital-first world, having a strong online presence is no longer optional—it’s essential for success. We specialize in creating comprehensive marketing campaigns that not only attract visitors but also convert them into loyal customers, driving sustainable growth and long-term success for your business.
          </p>
        </div>

        {/* Image Div Right - Using Ecommerce Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg"
            alt="Digital Marketing"
            className="w-full md:w-[90%] h-[300px] md:h-[350px] rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketing;
