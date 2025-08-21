"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';

const navLinks = [
  { id: 1, url: '/Beranda', level: "Beranda" },
  { id: 2, url: '/materi', level: "Materi" },
  { id: 3, url: '/kuis', level: "Kuis" },
  { id: 4, url: '/tentang', level: "Tentang" },
];

function Navbar() {
  const [activePath, setActivePath] = useState('/');
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const openNav = () => setShowMobileNav(true);
  const closeNav = () => setShowMobileNav(false);

  // Menutup mobile nav saat klik link
  const handleMobileLinkClick = () => {
    closeNav();
    window.scrollTo(0, 0); // Optional: scroll ke atas saat navigasi
  };

  return (
    <nav className="fixed w-full h-[12vh] bg-white z-[1000] shadow-md">
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        
        {/* Logo */}
        <Image src="/images/logo-SiPintar.png" width={75} height={75} alt="Logo" priority />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center flex-1 space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className={`nav__link text-black hover:text-[#8444e9] transition-colors duration-300 ${activePath === link.url ? 'text-[#5410B4] font-semibold border-b-2 border-[#5410B4]' : ''}`}>
                {link.level}
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden">
          <HiBars3BottomRight className='w-10 h-10 text-black cursor-pointer' onClick={openNav}/>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black/70 transition-opacity duration-500 ${showMobileNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeNav}></div>

      {/* Mobile Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-indigo-950 flex flex-col justify-center space-y-6 transform transition-transform duration-500 z-[1000] ${showMobileNav ? 'translate-x-0' : '-translate-x-full'}`}>
        <CgClose onClick={closeNav} className="absolute top-6 right-6 w-8 h-8 text-white cursor-pointer hover:text-red-500 transition-colors" />
        {navLinks.map((link, index) => (
          <Link key={link.id} href={link.url} onClick={handleMobileLinkClick}>
            <p 
              className='text-white text-[20px] sm:text-[28px] ml-12 border-b-[1.5px] border-white pb-2 cursor-pointer transition-all duration-300 hover:text-purple-400'
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {link.level}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;
