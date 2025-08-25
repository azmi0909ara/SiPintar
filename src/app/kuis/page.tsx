"use client";

import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();

  const modules = [
    {
      title: "📚 Bahasa Indonesia",
      desc: "Latihan soal Bahasa Indonesia untuk meningkatkan pemahaman membaca dan menulis.",
      color: "from-red-400 to-pink-500",
      link: "/kuis/indonesia",
    },
    {
      title: "🌍 Bahasa Inggris",
      desc: "Asah kemampuan bahasa Inggris dengan latihan soal grammar dan vocabulary.",
      color: "from-blue-400 to-indigo-500",
      link: "/kuis/inggris",
    },
    {
      title: "🇮🇩 PPKN",
      desc: "Pelajari nilai-nilai Pancasila, UUD, dan kewarganegaraan melalui latihan soal.",
      color: "from-green-400 to-emerald-500",
      link: "/kuis/ppkn",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg pt-25">
          🎯 Pilih Modul Latihan Kuis
        </h1>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((modul, idx) => (
            <div
              key={idx}
              onClick={() => router.push(modul.link)}
              className={`cursor-pointer bg-gradient-to-br ${modul.color} rounded-3xl shadow-2xl p-8 text-white transform hover:scale-105 transition duration-300 hover:shadow-yellow-400/40`}
            >
              <h2 className="text-2xl font-bold mb-4">{modul.title}</h2>
              <p className="text-lg opacity-90">{modul.desc}</p>
              <button className="mt-6 px-6 py-3 bg-white/20 rounded-xl font-semibold hover:bg-white/30 transition">
                Mulai Latihan →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
