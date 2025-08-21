"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <SliderCard
        name="Ahmad Fauzi"
        role="“Kursus ini membantu saya memahami dasar-dasar pemrograman dengan cara yang mudah. Sekarang saya lebih percaya diri dalam coding.”"
      />
      <SliderCard
        name="Siti Nurhaliza"
        role="“Materinya lengkap dan jelas, saya berhasil menyelesaikan kuis segala materi dengan nilai terbaik di kelas saya.”"
      />
      <SliderCard
        name="Budi Santoso"
        role="“Awalnya saya bingung belajar online, tapi platform ini bikin nyaman. Tutor sangat suportif!”"
      />
      <SliderCard
        name="Maria Clara"
        role="“Belajar dan pahamin materinya gampang kok . Terima kasih!”"
      />
    </Carousel>
  );
};

export default Slider;
