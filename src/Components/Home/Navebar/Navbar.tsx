"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

const navLinks = [
  { id: 1, url: "/Beranda", level: "Beranda" },
  { id: 2, url: "/materi", level: "Materi" },
  { id: 3, url: "/kuis", level: "Kuis" },
  { id: 4, url: "/tentang", level: "Tentang" },
];

function Navbar() {
  const [activePath, setActivePath] = useState("/");
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const openNav = () => setShowMobileNav(true);
  const closeNav = () => setShowMobileNav(false);

  const handleMobileLinkClick = () => {
    closeNav();
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full h-[12vh] bg-white/90 backdrop-blur-md z-[1000] shadow-md">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo-SiPintar.png"
          width={75}
          height={75}
          alt="Logo"
          priority
          className="cursor-pointer hover:scale-105 transition-transform"
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center flex-1 space-x-10">
          {navLinks.map((link) => {
            const isActive = activePath === link.url;
            return (
              <Link key={link.id} href={link.url}>
                <p
                  className={`relative text-[18px] font-medium cursor-pointer transition-all duration-300
                    ${
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500"
                        : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500"
                    }
                  `}
                >
                  {link.level}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden">
          <HiBars3BottomRight
            className="w-9 h-9 text-gray-800 cursor-pointer hover:text-purple-600 transition-colors"
            onClick={openNav}
          />
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          showMobileNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] sm:w-[60%] bg-gradient-to-b from-indigo-950 to-purple-900 flex flex-col pt-20 px-8 space-y-6 transform transition-transform duration-500 ease-in-out z-[1100] ${
          showMobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeNav}
          className="absolute top-5 right-5 text-white hover:text-red-400 transition"
        >
          <CgClose className="w-8 h-8" />
        </button>

        {/* Links */}
        {navLinks.map((link, index) => {
          const isActive = activePath === link.url;
          return (
            <Link key={link.id} href={link.url} onClick={handleMobileLinkClick}>
              <p
                className={`text-lg sm:text-xl font-medium border-b border-white/20 pb-2 cursor-pointer transition
                  ${
                    isActive
                      ? "text-purple-300 font-bold"
                      : "text-white hover:text-purple-300"
                  }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {link.level}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
