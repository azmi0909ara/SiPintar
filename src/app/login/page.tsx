"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db, auth } from "../lib/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email harus diisi");
      return;
    }

    setError("");
    setLoading(true);

    try {
      if (password) {
        try {
          const adminLogin = await signInWithEmailAndPassword(auth, email, password);
          if (adminLogin.user) {
            localStorage.setItem(
              "user",
              JSON.stringify({
                uid: adminLogin.user.uid,
                email: adminLogin.user.email,
                role: "admin",
              })
            );

            setPopupMessage("🎉 Selamat datang Admin di SiPintar!");
            setShowPopup(true);

            setTimeout(() => {
              setShowPopup(false);
              router.push("/admin");
            }, 2000);

            return;
          }
        } catch (err) {
          console.log("Admin login gagal:", err);
        }
      }

      const q = query(collection(db, "registrasi"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        localStorage.setItem("user", JSON.stringify(userData));

        setPopupMessage("🎉 Selamat datang di SiPintar!");
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
          router.push("/Beranda");
        }, 2000);
      } else {
        setError("Email atau password salah");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Terjadi kesalahan saat login");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 overflow-hidden p-4 sm:p-6">
      <div className="relative z-10 w-full max-w-md sm:max-w-lg p-6 sm:p-10 md:p-12 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-center text-white drop-shadow-lg">
          ✨ Login SiPintar
        </h1>

        {error && <p className="text-red-400 mb-4 sm:mb-6 text-center text-base sm:text-lg">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block mb-1 sm:mb-2 font-semibold text-white text-base sm:text-lg">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-white/50 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/20 text-white placeholder-white/70 transition transform hover:scale-[1.02]"
            />
          </div>

          <div>
            <label className="block mb-1 sm:mb-2 font-semibold text-white text-base sm:text-lg">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-white/50 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/20 text-white placeholder-white/70 transition transform hover:scale-[1.02]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-600 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            {loading ? "Loading..." : "🚀 Login"}
          </button>
        </form>

        <p className="mt-4 sm:mt-6 text-center text-white/80 text-sm sm:text-base md:text-lg">
          Belum punya akun?{" "}
          <span
            className="text-yellow-300 font-semibold hover:underline cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Daftar
          </span>
        </p>
      </div>

      {/* ✅ Popup Selamat Datang */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-center w-full max-w-sm animate-popup">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-800">{popupMessage}</h2>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes popup {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-popup {
          animation: popup 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
