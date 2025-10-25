import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "Amazing service! My Amazon store performance improved a lot within a month.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      text: "Very professional team and great support. Helped me with brand approvals smoothly!",
      rating: 4,
    },
    {
      name: "Arjun Mehta",
      text: "Their promotional strategies boosted my Flipkart sales significantly.",
      rating: 5,
    },
    {
      name: "Priya Verma",
      text: "They really know how to manage eCommerce accounts efficiently.",
      rating: 3,
    },
    {
      name: "Ravi Kumar",
      text: "Excellent experience! Totally recommend them for online sellers.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-900 text-white pb-8 md:py-12 overflow-x-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl text-yellow-600 sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Row */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out flex-shrink-0 p-3 sm:p-3 md:p-4"
              style={{
                width: "200px",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Top: Name */}
              <span className="font-semibold text-yellow-400 text-[10px] xs:text-[11px] sm:text-sm mb-1">
                {item.name}
              </span>

              {/* Middle: Description */}
              <p className="text-gray-300 text-[10px] xs:text-[11px] sm:text-xs leading-snug flex-grow">
                “{item.text}”
              </p>

              {/* Bottom: Rating */}
              <div className="flex gap-[1px] sm:gap-[2px] mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < item.rating
                        ? "text-yellow-400 fill-yellow-400 sm:w-[16px] sm:h-[16px]"
                        : "text-gray-600 sm:w-[16px] sm:h-[16px]"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
