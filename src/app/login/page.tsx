"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email dan password harus diisi");
      return;
    }

    setError("");
    console.log("Login submitted:", { email, password });
    alert("Login berhasil (dummy)");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 overflow-hidden">
      
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-lg p-12 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg">
          ✨ Login SiPintar
        </h1>

        {error && <p className="text-red-400 mb-6 text-center text-lg">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-white text-lg">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-white/50 rounded-2xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/20 text-white placeholder-white/70 transition transform hover:scale-105"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-white text-lg">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-white/50 rounded-2xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/20 text-white placeholder-white/70 transition transform hover:scale-105"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-600 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            🚀 Login
          </button>
        </form>

        <p className="mt-6 text-center text-white/80 text-lg">
          Belum punya akun?{" "}
          <span
            className="text-yellow-300 font-semibold hover:underline cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Daftar
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}
