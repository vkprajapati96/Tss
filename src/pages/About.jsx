import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

import { MapPin, Mail, Phone } from "lucide-react";


const About = () => {
  return ( <>
       <section className="py-16 bg-[#1A3255]">
      <div className="w-full max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row items-start gap-10">

        {/* Text Div */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 flex items-center gap-3">
            Grow 10X times faster by Our Expertise
          </h2>
          <p className="text-white text-lg md:text-base">
            Welcome to, your trusted partner in driving business growth and success. 
            With a proven track record of excellence and innovation, we specialize in 
            providing comprehensive services in IT, E-Commerce, Digital Marketing, 
            and BPO (Business Process Outsourcing). Our goal is to empower businesses 
            by streamlining their operations, enhancing their online presence, and 
            delivering unmatched customer support solutions. With years of experience 
            and a deep understanding of diverse industries, we pride ourselves on being 
            a reliable and forward-thinking company.
          </p>

          {/* Optional bullet points with icons */}
          <ul className="mt-4 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-white">
              <FaUsers className="text-yellow-600 text-xl flex-shrink-0" />
              Experienced Team
            </li>
            <li className="flex items-center gap-3 text-white">
              <FaRocket className="text-yellow-600 text-xl flex-shrink-0" />
              Fast Business Growth
            </li>
            <li className="flex items-center gap-3 text-white">
              <FaLightbulb className="text-yellow-600 text-xl flex-shrink-0" />
              Innovative Solutions
            </li>
          </ul>
        </div>

        {/* Image Div */}
        <div className="md:w-1/2 flex items-center">
          <img 
            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg" 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

    <section className="py-12 md:py-16 bg-white">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-8 md:gap-10">

        {/* Image Div first */}
        <div className="md:w-1/2 flex items-center">
          <img 
            src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg" 
            alt="Who Are We" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Div second */}
        <div className="md:w-1/2 flex flex-col justify-center gap-4 md:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600">
            Who Are We?
          </h2>
          <p className="text-gray-800 text-base sm:text-lg md:text-base leading-relaxed">
            The Star Solution Hundreds of suspended accounts from the e-commerce site have been revoked by The Star Solution in partnership with Upsell Ecommerce. Your account may be suspended temporarily or permanently due to various reasons. At The Star Solution, we provide a predetermined plan of action. Leave your differences to us and concentrate on your business expansion plans.
          </p>
          <p className="text-gray-800 text-base sm:text-lg md:text-base leading-relaxed">
            With The Star Solution, you can navigate the complexities of account suspension and focus on growing your business.
          </p>
          <p className="text-gray-800 text-base sm:text-lg md:text-base leading-relaxed">
            <strong>Our Vision:</strong> Build a streamlined, reliable, and growth-oriented support system for all e-commerce businesses to help them thrive without interruptions.
          </p>
        </div>

      </div>
    </section>  

        <section className="py-12 md:py-16" style={{ backgroundColor: "#1A3255" }}>
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-8 md:gap-10">

        {/* Text Div first */}
        <div className="md:w-1/2 flex flex-col justify-center gap-4 md:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600">
            Our Vision
          </h2>
          <p className="text-white text-base sm:text-lg md:text-base leading-relaxed">
            To be a global leader in providing innovative, reliable, and customer-centric business solutions that drive growth and create lasting value for our clients. Our vision extends beyond delivering exceptional services—we aim to redefine industry standards by fostering a culture of innovation and excellence. We aspire to build a future where businesses of all sizes can achieve their full potential with confidence and ease. By embracing emerging technologies and prioritizing sustainability, we envision creating a positive and enduring impact on the business world and the communities we serve.
          </p>
        </div>

        {/* Image Div second */}
        <div className="md:w-1/2 flex items-center">
          <img 
            src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg" 
            alt="Our Vision" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

    {/*  contact section */}

      <section className="bg-gray-100 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-yellow-600">
          Contact Us
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Div: Form */}
        <div className="flex-1 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          <form className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
            />
            <button
              type="submit"
              className="bg-yellow-500 w-[100px] mx-auto text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Div: Contact Info */}

        <div className="flex-1 flex flex-col justify-start gap-6 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <MapPin size={24} className="text-yellow-500" />
            <span className="text-lg sm:text-xl font-semibold">
              Star Solution
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={24} className="text-yellow-500" />
            <span className="text-lg sm:text-xl">contact@starsolution.in</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-yellow-500" />
            <span className="text-lg sm:text-xl">+91 9876543210</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base mt-4">
            At The Star Solution, we are committed to providing exceptional
            e-commerce seller account management services on platforms like
            Amazon, Flipkart, and more. Whether you have questions about our
            services, need support with your seller account, or are looking to
            collaborate, our dedicated team is here to assist you.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-2">
            Feel free to reach out to us via email, phone, or the contact form
            beside. We strive to respond promptly and ensure that your needs are
            met with the highest level of professionalism and care.
          </p>
        </div>
      </div>
    </section>
    
       </>

  );
};

export default About;
