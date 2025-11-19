import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="h-screen bg-red-400 relative overflow-hidden">
            <div id="mainl" className="relative h-full w-full">

                {/* Background Image */}
                <Image
                    src="/hero.png"
                    alt="hero img"
                    fill
                    className="object-cover"
                />

                {/* Content */}
                <div
                    id="content"
                    className="absolute inset-0 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 px-6 lg:px-20"
                >
                    {/* LEFT SIDE (TEXT) */}
                    <div
                        id="txt"
                        className="text-white w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl pb-3 leading-tight">
                            Brand, Design &
                        </h1>
                        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl pb-3 leading-tight">
                            Development Agency
                        </h1>

                        <p className="font-serif text-base md:text-lg mt-6 lg:mt-10 max-w-xl mx-auto lg:mx-0">
                            There are many variations of passages of lorem ipsum available,
                            but the majority have suffered alteration in some form.
                        </p>

                        {/* BUTTONS */}
                        <div
                            id="btns"
                            className="mt-10 lg:mt-16 flex items-center justify-center lg:justify-start gap-6"
                        >
                            <Link
                                href="#contact"
                                className="bg-blue-500 text-white px-6 md:px-8 py-3 rounded-3xl flex items-center gap-2 hover:bg-blue-600 transition-all duration-300"
                            >
                                <span>Let's Talk Us</span>
                                <AiOutlineArrowRight className="text-xl" />
                            </Link>

                            <Link
                                target="_blank"
                                href="https://www.youtube.com/watch?v=W5IGWSnrc2A"
                                className="bg-blue-500 rounded-full flex items-center justify-center w-14 h-14 text-3xl text-white hover:bg-blue-600 transition-all duration-300"
                            >
                                <AiOutlinePlayCircle />
                            </Link>
                        </div>
                    </div>

                    <div
                        id="img"
                        className="
    w-full lg:w-1/2 flex justify-center items-center 
    h-[280px] sm:h-[350px] md:h-[420px] lg:h-[550px] xl:h-[650px]
    rounded-2xl overflow-hidden
  "
                    >
                        <Image
                            src="/admin.png"
                            alt="admin img"
                            width={500}
                            height={500}
                            className="h-full w-auto object-contain"
                        />
                    </div>



                </div>
            </div>
        </section>
    );
}
