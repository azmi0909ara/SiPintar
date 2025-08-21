"use client";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

type Props = {
  course: {
    id: number;
    materi: string;
    penjelasan: string;
  };
  index: number; // ⬅️ tambah index biar bisa kasih delay beda
};

const CourseCard = ({ course, index }: Props) => {
  return (
    <Tilt>
      <div
        className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer p-6 hover:shadow-2xl transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay={index * 200} // ⬅️ delay per card (200ms, 400ms, dst.)
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md mb-4">
          <FaBookOpen className="w-6 h-6" />
        </div>

        {/* Materi */}
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          {course.materi}
        </h1>

        {/* Penjelasan */}
        <p className="text-gray-600 leading-relaxed text-sm">
          {course.penjelasan}
        </p>
      </div>
    </Tilt>
  );
};

export default CourseCard;
