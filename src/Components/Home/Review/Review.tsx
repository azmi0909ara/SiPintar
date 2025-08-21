"use client";
import Slider from "@/Components/Helper/Slider";
import React from "react";
import { BsQuote } from "react-icons/bs";

const Review = () => {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
        
        {/* Left Content */}
        <div className="xl:col-span-1 mt-6" data-aos="fade-right">
          {/* Icon + Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center shadow-md">
              <BsQuote className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-white font-semibold">
              Ulasan Pelajar
            </h1>
          </div>

          {/* Big Title */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-8 font-extrabold md:leading-[3rem] xl:leading-[3.6rem] text-white">
            Dipercaya oleh Ribuan Siswa & Siswi
          </h1>

          {/* Description */}
          <p className="text-base text-gray-300 mt-6 leading-relaxed">
            Platform kami telah membantu ribuan pelajar meningkatkan skill,
            menyelesaikan kursus dengan baik, dan mencapai tujuan belajar
            mereka.
          </p>

          {/* Stats */}
          <div
            className="flex items-center space-x-10 mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <p className="text-rose-500 font-extrabold text-5xl">95%</p>
              <p className="text-white mt-2 text-sm md:text-base">
                Tingkat Kepuasan <br /> Pelajar
              </p>
            </div>
            <div>
              <p className="text-rose-500 font-extrabold text-5xl">90%</p>
              <p className="text-white mt-2 text-sm md:text-base">
                Menyelesaikan <br /> Kursus dengan Sukses
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Slider */}
        <div
          className="xl:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Review;
