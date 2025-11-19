import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full mt-20 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-300 text-white pt-14 pb-10 px-6 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">Amarjit It Services</h2>
          <p className="text-white/90 text-sm leading-relaxed">
            We build modern, fast and visually stunning websites that help your
            business grow.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li className="hover:text-white cursor-pointer transition">
                <Link href={'/'}>Home</Link></li>
            <li className="hover:text-white cursor-pointer transition">
                <Link href={'#services'}>Services</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition">
                <Link href={'#pricing'}>Pricing</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition">
                <Link href={'#contact'}>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm text-white/90">#########</p>
          <p className="text-sm text-white/90">📍 India</p>
          <div className="flex gap-4 mt-4 text-lg">
            <span className="cursor-pointer hover:text-white">
                <Link target="_blank" href={'https://www.instagram.com/'}>
                    <FaInstagram />
                </Link>
            </span>
            <span className="cursor-pointer hover:text-white">
                <Link target="_blank" href={'https://www.facebook.com/'}>
                    <FaFacebook />
                </Link>
            </span>
            <span className="cursor-pointer hover:text-white">
                <Link target="_blank" href={'https://github.com/'}>
                    <FaGithub />
                </Link>
            </span>
            <span className="cursor-pointer hover:text-white">
                <Link target="_blank" href={'https://x.com/'}>
                    <FaTwitter />
                </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-white/80 text-sm border-t border-white/30 pt-4">
        © {new Date().getFullYear()} Amarjit It Services — All Rights Reserved.
      </div>
    </footer>
  );
}

