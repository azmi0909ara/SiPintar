"use client";
import Image from "next/image";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Feature = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto">
        {/* images */}
        <Tilt>
          <div data-aos="fade-right" data-aos-delay="100">
            <Image
              src="/images/f.png"
              alt="Feature Image"
              width={1000}
              height={1000}
              className="rounded-xl shadow-lg"
            />
          </div>
        </Tilt>

        {/* text */}
        <div>
          {/* Header */}
          <div
            className="flex items-center space-x-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-md">
              <FaBriefcase className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-gray-800 font-semibold">
              Pengalaman Belajar Premium
            </h1>
          </div>

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-extrabold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-900"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Menyediakan Kursus Online Terbaik
          </h1>

          {/* Feature 1 */}
          <div className="mt-8 mb-6" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-lg md:text-2xl text-gray-800 font-semibold">
              Kuasai Keterampilan yang Penting
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
              SiPintar membantu Anda menguasai keterampilan akademik dan praktis
              dengan metode belajar interaktif serta materi yang relevan.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="mt-8 mb-6" data-aos="fade-up" data-aos-delay="500">
            <h1 className="text-lg md:text-2xl text-gray-800 font-semibold">
              Tingkatkan Kemampuan Belajar
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
              Belajar menjadi lebih menyenangkan dengan dukungan mentor ahli
              dan akses fleksibel kapan saja, di mana saja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
