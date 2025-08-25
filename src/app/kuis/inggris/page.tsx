"use client";

import { useState } from "react";
import { InggrisQuestions } from "@/data/inggris";
import { useRouter } from "next/navigation";

export default function QuizInggris() {
  const router = useRouter();
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [resultHistory, setResultHistory] = useState<
    { attempt: number; score: number }[]
  >([]);

  const startQuiz = () => {
    const shuffled = [...InggrisQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(null));
    setCurrentQuestion(0);
    setShowResult(false);
    setStarted(true);
  };

  const handleAnswer = (option: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
  };

  const score = answers.filter(
    (ans, idx) => ans === shuffledQuestions[idx]?.answer
  ).length;

  const handleFinish = () => {
    const isAllAnswered = answers.every((ans) => ans !== null);
    if (!isAllAnswered) {
      alert("⚠️ Harap jawab semua soal terlebih dahulu sebelum menyelesaikan kuis.");
      return;
    }

    const newAttempt = attempts + 1;
    setAttempts(newAttempt);
    setResultHistory([...resultHistory, { attempt: newAttempt, score }]);
    setShowResult(true);
  };

  // 📌 Halaman Intro
  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-28 pb-10">
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 max-w-2xl w-full text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4">
            Kuis Bahasa Inggris
          </h1>
          <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
            Kuis ini terdiri dari 10 soal yang diacak dari total 45 soal.  
            Anda memiliki maksimal <span className="font-bold">3 kali percobaan</span>.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={startQuiz}
              disabled={attempts >= 3}
              className={`px-6 py-3 rounded-xl text-base sm:text-lg font-semibold transition ${
                attempts >= 3
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              Mulai Quiz
            </button>

            <button
              onClick={() => router.push("/kuis")}
              className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
            >
              ← Kembali ke Kuis
            </button>
          </div>

          {/* Riwayat hasil */}
          {resultHistory.length > 0 && (
            <div className="mt-8 text-left">
              <h2 className="text-lg sm:text-xl font-bold text-indigo-700 mb-4">
                Riwayat Hasil
              </h2>
              <ul className="space-y-2">
                {resultHistory.map((res, idx) => (
                  <li
                    key={idx}
                    className="text-blue-800 font-bold px-4 py-2 bg-gray-100 rounded-lg flex justify-between"
                  >
                    <span>Percobaan {res.attempt}</span>
                    <span className="font-semibold text-red-600">
                      Skor: {res.score} / 10
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 📌 Loading state
  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg sm:text-xl">
        Loading quiz...
      </div>
    );
  }

  // 📌 Halaman Quiz
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-indigo-100 px-4 md:px-12 pt-28 pb-10 gap-6">
      {/* Sidebar */}
   <div className="w-full bg-white rounded-2xl shadow-lg p-4 mb-6">
  <h2 className="text-base sm:text-lg font-bold text-indigo-700 mb-4 text-center">
    Nomor Soal
  </h2>
  <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 sm:gap-3 justify-items-center">
    {shuffledQuestions.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentQuestion(idx)}
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition
          ${
            idx === currentQuestion
              ? "bg-indigo-600 text-white"
              : answers[idx]
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        {idx + 1}
      </button>
    ))}
  </div>
</div>


      {/* Area Utama */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col justify-between">
        {!showResult ? (
          <>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-4 sm:mb-6">
                Soal {currentQuestion + 1}
              </h2>
              <p className="text-black text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                {shuffledQuestions[currentQuestion].question}
              </p>

              {shuffledQuestions[currentQuestion].image && (
                <div className="flex justify-center mb-6">
                  <img
                    src={shuffledQuestions[currentQuestion].image}
                    alt="Question illustration"
                    className="max-h-56 sm:max-h-64 rounded-xl shadow-md object-contain"
                  />
                </div>
              )}

              <div className="space-y-2 sm:space-y-3">
                {shuffledQuestions[currentQuestion].options.map(
                  (option: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      className={`text-black w-full text-left px-4 py-2 sm:px-5 sm:py-3 rounded-xl border transition font-medium text-sm sm:text-base
                        ${
                          answers[currentQuestion] === option
                            ? "bg-red-600 text-white border-red-600"
                            : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                        }`}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Navigasi */}
            <div className="flex flex-wrap justify-between items-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={() => router.push("/kuis")}
                className="px-4 py-2 sm:px-5 sm:py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition text-sm sm:text-base"
              >
                ← Kembali
              </button>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition text-sm sm:text-base"
                  disabled={currentQuestion === 0}
                >
                  Sebelumnya
                </button>
                {currentQuestion < shuffledQuestions.length - 1 ? (
                  <button
                    onClick={() =>
                      setCurrentQuestion((prev) =>
                        Math.min(prev + 1, shuffledQuestions.length - 1)
                      )
                    }
                    className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition text-sm sm:text-base"
                  >
                    Selanjutnya
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition text-sm sm:text-base"
                  >
                    Selesai
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          // 📌 Hasil
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4 sm:mb-6">
              Hasil Kuis
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">
              Skor Anda:{" "}
              <span className="font-bold text-red-600">
                {score} / {shuffledQuestions.length}
              </span>
            </p>
            {attempts < 3 ? (
              <button
                onClick={() => setStarted(false)}
                className="mt-4 sm:mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
              >
                Ulangi Kuis
              </button>
            ) : (
              <p className="text-gray-600 font-semibold mt-4">
                Anda sudah mencapai batas maksimal percobaan (3x).
              </p>
            )}
            <button
              onClick={() => router.push("/kuis")}
              className="mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
            >
              Kembali ke Modul
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
