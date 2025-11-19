import Image from "next/image";
import Slider from "./Slider";

export default function ServicesSection() {
    return (<>
        <section id="services" className="h-screen w-full bg-linear-to-r from-purple-800 to-blue-500 mt-2">
            <div className="h-full w-full p-20">
                <div id="txt">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl text-white font-sans mb-4 md:mb-6">
                    Service
                    <svg
                        width="40"
                        height="4"
                        viewBox="0 0 40 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                    >
                        <rect width="40" height="4" rx="2" fill="currentColor" />
                    </svg>
                </h2>
                <h1 className="text-5xl text-white font-serif">Our Best Service</h1>
                </div>
                <Slider />
            </div>
        </section>
    </>)
}
