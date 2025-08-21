import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Kontak */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold mb-4">Kontak</h2>
          <p className="text-gray-300">📧 Email: support@elearning.com</p>
          <p className="text-gray-300">📞 Telp: +62 812-3456-7890</p>
          <p className="text-gray-300">📍 Alamat: Jl. Pendidikan No. 123, Jakarta</p>
        </div>

        {/* Sosial Media */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold mb-4">Ikuti Kami</h2>
          <div className="flex space-x-6">
            <a
              href="https://youtube.com"
              target="_blank"
              className="hover:text-red-500 transition"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <FaYoutube size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-500 transition"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
