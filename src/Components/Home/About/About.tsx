import React from "react";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* first part */}
        <div data-aos="fade-right" data-aos-delay="100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center flex-col shadow-md">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-gray-800 font-semibold">
              Terpercaya & Bersertifikat
            </h1>
          </div>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-extrabold leading-snug text-gray-900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Belajar Online Kapan Saja, di Mana Saja
          </h1>
          <p
            className="mt-4 text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            SiPintar hadir sebagai solusi belajar modern dengan materi
            interaktif, mentor profesional, dan sertifikat resmi. 
            Jadikan setiap momen sebagai kesempatan untuk meningkatkan
            pengetahuan dan prestasi Anda.
          </p>
        </div>

        {/* second part */}
        <div>
          {/* Feature 01 */}
          <div data-aos="fade-left" data-aos-delay="400">
            <h1 className="text-7xl lg:text-9xl font-bold text-gray-200 select-none">
              01
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl mb-3 text-gray-800 font-bold">
                Jadwal Fleksibel
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-gray-600 leading-relaxed">
                Belajar sesuai waktu Anda. Akses materi kapan pun tanpa batasan,
                sehingga cocok untuk pelajar dan pekerja.
              </p>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="mt-12 w-full" data-aos="fade-left" data-aos-delay="600">
            <h1 className="text-7xl lg:text-9xl font-bold text-gray-200 select-none">
              02
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl mb-3 text-gray-800 font-bold">
                Materi Berkualitas
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-gray-600 leading-relaxed">
                Disusun oleh tenaga pendidik berpengalaman, setiap modul
                memastikan pemahaman mendalam dan peningkatan prestasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
