import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Kontak */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Kontak</h2>
          <p className="text-gray-300">Email: support@elearning.com</p>
          <p className="text-gray-300">Telp: +62 812-3456-7890</p>
          <p className="text-gray-300">Alamat: Jl. Pendidikan No. 123, Jakarta</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Ikuti Kami</h2>
          <div className="flex space-x-6">
            <a href="https://youtube.com" target="_blank" className="hover:text-red-500">
              <FaYoutube size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">
              <FaInstagram size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-500">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} E-Learning. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
