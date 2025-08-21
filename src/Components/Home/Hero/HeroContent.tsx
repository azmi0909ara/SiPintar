"use client"
import React from "react";
import { useRouter } from "next/navigation";

const HeroContent = () => {
  const router = useRouter();

  return (
    <div className="text-center md:text-left">
      {/* Judul */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug text-white"
      >
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Belajar Pintar,
        </span>
        <br />
        Raih Prestasi<br />
        Bersama{" "}
        <span className="text-yellow-400 drop-shadow-md">SiPintar</span>
      </h1>

      {/* Deskripsi */}
      <p
        data-aos="fade-left"
        data-aos-delay="200"
        className="mt-6 max-w-2xl mx-auto md:mx-0 text-sm md:text-lg text-white/80 leading-relaxed"
      >
        Platform pembelajaran online yang dirancang untuk membantu siswa meraih prestasi optimal. 
        Dengan metode belajar interaktif dan materi berkualitas,{" "}
        <span className="font-semibold text-green-300">SiPintar</span> adalah partner terbaik 
        dalam perjalanan pendidikan Anda.
      </p>

      {/* Tombol Aksi */}
      <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4">
        {/* Tombol Materi */}
        <button
          onClick={() => router.push("/materi")}
          data-aos="zoom-in"
          data-aos-delay="300"
          className="px-7 py-3 rounded-lg font-medium text-white bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-400/50 transform hover:scale-105 transition-all duration-300"
        >
          🚀 Mulai Belajar
        </button>

        {/* Tombol Kuis */}
        <button
          onClick={() => router.push("/kuis")}
          data-aos="zoom-in"
          data-aos-delay="400"
          className="px-7 py-3 rounded-lg font-medium text-white bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-red-400/50 transform hover:scale-105 transition-all duration-300"
        >
          🎯 Mulai Latihan
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
