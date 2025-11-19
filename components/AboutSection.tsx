import { TiTick } from "react-icons/ti";
import Image from 'next/image';
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

export default function AboutSection() {
  const services = [
    "Website Building",
    "Web Design",
    "SEO Optimization",
    "Website Maintenance"
  ];

  return (
    <section id="about" className="w-full h-screen py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-sans mb-4 md:mb-6">
            About Us
            <svg
              width="40"
              height="4"
              viewBox="0 0 40 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-900"
            >
              <rect width="40" height="4" rx="2" fill="currentColor" />
            </svg>
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            We provide the best design solution
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6">
            Our passion for sustainability has driven us to refine our process and become leaders in web sustainability and performance, helping to shift the industry towards a zero-carbon future.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2 text-lg font-semibold">
                <TiTick className="text-green-500" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <Link
            href="#about"
            className="inline-flex justify-center items-center gap-2 px-5 py-3 md:px-6 md:py-3 rounded-3xl bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:gap-3 transition-all duration-300"
          >
            Learn More
            <AiOutlineArrowRight />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          {/* Rating Card */}
          <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex items-center gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="text-blue-500 text-3xl sm:text-4xl">
              <FaUsers />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">New Company</h2>
              <p className="text-gray-600 text-sm sm:text-base">No Users</p>
            </div>
          </div>

          {/* About Image */}
          <div id="img" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
            <Image
              src="/about.png"
              alt="about image"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
