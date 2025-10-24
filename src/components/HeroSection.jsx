import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[hsl(216,53%,22%)]">
      <div className="relative min-h-screen md:pb-20 flex flex-col items-center w-full max-w-[1340px] mx-auto px-4 md:px-8 bg-[#1A3255]">

        {/* absolute left dives */}
        <div className="hidden md:block absolute md:top-[90px] lg:top-16 left-16 w-[150px] h-[100px]">
          <img
            className="w-full"
            src="https://spectrumbpo.com/wp-content/uploads/2024/11/Amazon-29Nov2024.png"
            alt="Amazon"
          />
        </div>

        <div className="hidden md:block absolute md:top-[390px] lg:top-80 left-4 w-[150px] h-[100px]">
          <img
            className="w-full"
            src="https://spectrumbpo.com/wp-content/uploads/2024/11/Walmart-29Nov2024-.png"
            alt="Walmart"
          />
        </div>

        {/* absolute right dives */}
        <div className="hidden md:block absolute md:top-[100px] lg:top-[480px] right-20 w-[150px] h-[100px]">
          <img
            className="w-full"
            src="https://spectrumbpo.com/wp-content/uploads/2024/11/Etsy-29Nov2024.png"
            alt="Etsy"
          />
        </div>

        <div className="hidden md:block absolute md:top-[500px] lg:top-44 right-8 w-[150px] h-[100px]">
          <img
            className="w-full"
            src="https://spectrumbpo.com/wp-content/uploads/2024/11/ebay-29Nov2024.png"
            alt="eBay"
          />
        </div>
     
        {/* Main Content */}
        <div className="w-full flex flex-col items-center text-center mt-20 md:mt-28">
          <h1 className="text-yellow-600 font-semibold text-3xl md:text-4xl flex flex-col gap-2">
            The Star Solution
            <span className='text-xl md:text-3xl'>Information Technology</span>
          </h1>

          <h2 className="text-lg font-semibold md:text-4xl lg:text-5xl text-white mt-4 leading-tight">
            Full Service eCommerce Agency
          </h2>

          <p className="font-semibold lg:text-lg md:w-[700px] lg:w-[700px] text-white mt-6 md:mt-8 mx-auto px-2">
            An eCommerce Growth Agency built solely on the grounds of TRUST,
            LOYALTY, and SATISFACTION! SpectrumBPO assists in Ongoing
            management, Product Optimization, Improved ROI/ACOS and Upscaling
            your sales for all major marketplaces such as Amazon, Walmart, eBay,
            Etsy, Shopify and more. Building a solid BRAND PRESENCE with
            PROMISING e-commerce solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pb-4 mt-10">
            <button className="px-10 md:px-14 py-2 text-white text-lg font-semibold border border-yellow-400 rounded-full hover:shadow-[0_4px_8px_rgba(253,224,71,0.4)] transition-shadow duration-300">
              Let's Get Started
            </button>

            <button className="px-10 md:px-14 py-2 text-white text-lg font-semibold border border-yellow-400 rounded-full hover:shadow-[0_4px_8px_rgba(253,224,71,0.4)] transition-shadow duration-300">
              Activate Free Trial
            </button>
          </div>
        </div>

        {/* ↓↓↓ CHANGE #1: hidden md:block → hidden md:flex + adjust spacing */}
        {/* Pehle pure section ko hide karne se bada gap aata tha.
            Ab yeh md:flex hai, to height consistent rahegi aur gap kam hoga. */}
        <div className='hidden md:flex justify-center'>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 md:mt-20"> 
            {/* ↓↓↓ CHANGE #2: mt-36 → mt-20 (kam spacing) */}
            {/* isse top ka gap kam ho gaya */}
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-03.webp?w=100&h=40"
              alt="Logo1"
            />
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-04.webp?w=100&h=40"
              alt="Logo2"
            />
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-01.webp?w=100&h=40"
              alt="Logo3"
            />
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-05.webp?w=100&h=40"
              alt="Logo4"
            />
            <img
              src="https://spectrumbpo.com/wp-content/uploads/2025/10/LG-02.webp?w=100&h=40"
              alt="Logo5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
