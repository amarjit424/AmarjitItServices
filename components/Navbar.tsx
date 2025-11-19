"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type RouteItem = {
  route: string;
  txt: string;
};

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const routes: RouteItem[] = [
    { route: "/", txt: "Home" },
    { route: "/#about", txt: "About Us" },
    { route: "/#services", txt: "Services" },
    { route: "/#contact", txt: "Contact Us" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed w-full z-9999 text-white">
      <nav className="bg-black/30 border-b border-white/30 backdrop-blur-2xl py-3 px-4 flex justify-around items-center">
        <h1 className="text-xl font-bold">Amarjit IT Services</h1>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {routes.map((items, index) => (
              <li key={index}>
                <Link href={items.route} className="hover:text-blue-300">
                  {items.txt}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {open && (
        <div
          ref={menuRef}
          className="md:hidden bg-black/70 backdrop-blur-lg w-full text-white py-6 px-4 space-y-4 border-b border-white"
        >
          <ul className="flex flex-col gap-4">
            {routes.map((items, index) => (
              <li key={index}>
                <Link
                  href={items.route}
                  className="text-lg block py-2 hover:text-blue-300"
                >
                  {items.txt}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
