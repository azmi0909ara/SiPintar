"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-start bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 overflow-hidden p-8 lg:p-16">
      
     {/* Hero Card */}
<div className="relative z-10 w-[70%] flex flex-col items-start space-y-8 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-12 lg:p-16">
  
  {/* Hero Text */}
  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-snug text-white drop-shadow-lg">
    <span className="bg-gradient-to-r from-green-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
      Belajar Pintar,
    </span>
    <br />
    Raih Prestasi<br />
    Bersama <span className="text-yellow-400 drop-shadow-md">SiPintar</span>
  </h1>

  <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
    Platform pembelajaran digital untuk anak-anak SD kelas 1–6. Belajar jadi lebih menyenangkan, interaktif, dan bisa diakses kapan saja,{" "}
    <span className="font-semibold text-green-300">SiPintar</span> adalah partner terbaik dalam perjalanan pendidikan Anda.
  </p>

  {/* Tombol Aksi */}
  <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
    <button
      onClick={() => router.push("/login")}
      className="px-10 py-4 rounded-lg font-medium text-white bg-gradient-to-r from-green-700 to-blue-700 hover:from-green-600 hover:to-blue-600 shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      🚀 Mulai Belajar
    </button>

    <button
      onClick={() => router.push("/register")}
      className="px-10 py-4 rounded-lg font-medium text-white bg-gradient-to-r from-red-700 to-pink-700 hover:from-red-600 hover:to-pink-600 shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      Register
    </button>
  </div>
</div>

    </div>
  );
}
