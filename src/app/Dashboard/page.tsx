"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import About from "@/Components/Home/About/About";
import Course from "@/Components/Home/Course/Course";
import Feature from "@/Components/Home/Feature/Feature";
import Review from "@/Components/Home/Review/Review";
import Article from "@/Components/Home/Article/Article";
import "aos/dist/aos.css";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Init AOS
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          anchorPlacement: "top-bottom",
        });
      }
    };
    initAOS();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen flex items-center justify-start bg-gradient-to-br from-white via-gray-100 to-gray-300 p-6 sm:p-12 lg:p-20">
        <div className="relative z-10 max-w-3xl flex flex-col items-start space-y-6">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
            <span className="text-blue-600">Belajar Pintar,</span>
            <br />
            Raih Prestasi
            <br />
            Bersama{" "}
            <span className="text-indigo-600 drop-shadow-sm">SiPintar</span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Platform pembelajaran digital untuk anak-anak SD kelas 1–6. Belajar
            jadi lebih menyenangkan, interaktif, dan bisa diakses kapan saja.{" "}
            <span className="font-semibold text-blue-600">SiPintar</span>{" "}
            adalah partner terbaik dalam perjalanan pendidikan Anda.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all duration-300"
            >
              🚀 Mulai Belajar
            </button>

            <button
              onClick={() => router.push("/register")}
              className="px-8 py-3 rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-700 shadow-md transition-all duration-300"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* ================= HOME SECTIONS ================= */}
      <div>
        <About />
        <Course />
        <Feature />
        <Review />
        <Article />
      </div>
    </div>
  );
}
