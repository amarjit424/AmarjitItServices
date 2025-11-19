"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaLaptopCode, FaPalette, FaBolt, FaTools } from "react-icons/fa";

export default function Slider() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      desc: "Fast, modern and SEO-friendly websites tailored for your business.",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Design",
      desc: "Clean, attractive and user-centered designs for better conversion.",
    },
    {
      icon: <FaBolt />,
      title: "Performance Optimization",
      desc: "Boost loading speed, fix issues and enhance overall performance.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      desc: "Keep your site updated, secure, and running smoothly 24/7.",
    },
  ];

  return (
    <div className="w-full relative py-10">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        speed={700}
        className="multiple-slide-carousel"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-xl rounded-2xl p-7 h-80 flex flex-col justify-between border border-indigo-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-300">
              <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl text-4xl font-bold shadow-inner">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute flex justify-center items-center left-[50%] right-0 w-fit bottom-0 -mb-4 z-20">
        <button className="swiper-button-prev group p-3 flex justify-center items-center border border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 -translate-x-20 bg-white shadow-md">
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="swiper-button-next group p-3 flex justify-center items-center border border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 translate-x-20 bg-white shadow-md">
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
