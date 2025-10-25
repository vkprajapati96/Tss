import React from "react";

const PartnersSection = () => {
  const partnersRow1 = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    "https://shop.mycrofine.com/wp-content/uploads/2023/06/flipkart.png",
    "https://stockarea.io/blogs/wp-content/uploads/2021/11/1_vNRDrFBkpQ9CtWZ33fScng.png",
    "https://images.glowroad.com/logo.png",
    "https://logos-world.net/wp-content/uploads/2022/12/Myntra-Logo.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/11/swiggy-logo-freelogovectors.net_.png",
  ];

  const partnersRow2 = [
    "https://logos-world.net/wp-content/uploads/2022/12/Myntra-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Byju%27s_logo.svg/2560px-Byju%27s_logo.svg.png",
    "https://stockarea.io/blogs/wp-content/uploads/2021/11/1_vNRDrFBkpQ9CtWZ33fScng.png",
    "https://images.glowroad.com/logo.png",
    "https://shop.mycrofine.com/wp-content/uploads/2023/06/flipkart.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
  ];

  return (
    <div className="bg-gray-900"> 
    <div className=" max-w-[1340px]  mx-auto px-4  w-full   py-12">

      <h2 className="text-center text-yellow-600 text-3xl font-bold mb-10">
        Our Partners
      </h2>

      <div className="flex flex-col items-center gap-8">
        {/* -------- First Row -------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-[90%] md:w-[80%]">
          {partnersRow1.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-25 h-25 object-contain"
              />
            </div>
          ))}
        </div>

        {/* -------- Second Row -------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-[90%] md:w-[80%]">
          {partnersRow2.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <img
                src={logo}
                alt={`Partner ${index + 7}`}
                className="w-25 h-25 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PartnersSection;
