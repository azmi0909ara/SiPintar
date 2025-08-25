"use client";

import { useEffect, useState } from "react";
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

  // Saat mulai quiz → acak soal
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

  const handleFinish = () => {
    const score = answers.filter(
      (ans, idx) => ans === shuffledQuestions[idx]?.answer
    ).length;

    const newAttempt = attempts + 1;
    setAttempts(newAttempt);
    setResultHistory([
      ...resultHistory,
      { attempt: newAttempt, score: score },
    ]);

    setShowResult(true);
  };

  const score = answers.filter(
    (ans, idx) => ans === shuffledQuestions[idx]?.answer
  ).length;

  // Jika belum mulai → Intro Page
  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-28 pb-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">
            Kuis Bahasa Inggris
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Kuis ini terdiri dari 10 soal yang diacak dari total 45 soal.  
            Anda memiliki maksimal <span className="font-bold">3 kali percobaan</span>.
          </p>

          <button
            onClick={startQuiz}
            disabled={attempts >= 3}
            className={`px-6 py-3 rounded-xl text-lg font-semibold transition ${
              attempts >= 3
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            Mulai Quiz
          </button>

          <button
            onClick={() => router.push("/kuis")}
            className="ml-4 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
          >
            ← Kembali ke Kuis
          </button>

          {/* Riwayat hasil */}
          {resultHistory.length > 0 && (
            <div className="mt-8 text-left">
              <h2 className="text-xl font-bold text-indigo-700 mb-4">
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

  // Halaman Quiz
  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading quiz...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-indigo-100 px-4 md:px-12 pt-28 pb-10">
      {/* Sidebar Nomor Soal */}
      <div className="w-full md:w-1/4 bg-white rounded-2xl shadow-lg p-4 mb-6 md:mb-0 md:mr-6 h-max sticky top-28">
        <h2 className="text-lg font-bold text-indigo-700 mb-4 text-center">
          Nomor Soal
        </h2>
        <div className="grid grid-cols-8 md:grid-cols-5 gap-3">
          {shuffledQuestions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentQuestion(idx)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition
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

      {/* Main Quiz Area */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
        {!showResult ? (
          <>
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">
                Soal {currentQuestion + 1}
              </h2>
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                {shuffledQuestions[currentQuestion].question}
              </p>

              {/* Jika ada gambar di soal */}
              {shuffledQuestions[currentQuestion].image && (
                <div className="flex justify-center mb-6">
                  <img
                    src={shuffledQuestions[currentQuestion].image}
                    alt="Question illustration"
                    className="max-h-64 rounded-xl shadow-md"
                  />
                </div>
              )}

              <div className="space-y-3">
                {shuffledQuestions[currentQuestion].options.map(
                  (option: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      className={`text-gray-800 w-full text-left px-5 py-3 rounded-xl border transition font-medium
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
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => router.push("/kuis")}
                className="px-5 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
              >
                ← Kembali ke Kuis
              </button>

              <div className="space-x-2">
                <button
                  onClick={() =>
                    setCurrentQuestion((prev) => Math.max(prev - 1, 0))
                  }
                  className="px-5 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition"
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
                    className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                  >
                    Selanjutnya
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="px-5 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
                  >
                    Selesai
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          // Hasil Kuis
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Hasil Kuis
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Skor Anda:{" "}
              <span className="font-bold text-red-600">
                {score} / {shuffledQuestions.length}
              </span>
            </p>
            {attempts < 3 ? (
              <button
                onClick={() => setStarted(false)}
                className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
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
              className="mt-4 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
            >
              Kembali ke Modul
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
