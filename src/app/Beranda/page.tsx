"use client";

import React, { useEffect } from "react";
import Hero from "@/Components/Home/Hero/Hero";
import About from "@/Components/Home/About/About";
import Course from "@/Components/Home/Course/Course";
import Feature from "@/Components/Home/Feature/Feature";
import Review from "@/Components/Home/Review/Review";
import Article from "@/Components/Home/Article/Article";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    // ✅ Init AOS
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

    // ✅ Init Firebase Analytics (optional di Beranda)
    (async () => {
      if (typeof window !== "undefined") {
        const { analytics } = await import("@/app/lib/firebaseConfig");
        console.log("Analytics:", analytics);
      }
    })();
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Course />
      <Feature />
      <Review />
      <Article />
    </div>
  );
}

export default Home;
