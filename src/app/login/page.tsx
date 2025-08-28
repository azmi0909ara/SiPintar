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
    if (!password) {
      setError("Password harus diisi");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // ✅ Login Admin
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

      // ✅ Login User
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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6">
      
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border border-gray-200 animate-fadeIn">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          ✨ Login SiPintar
        </h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`text-black w-full border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                  !email && error.includes("Email") ? "border-red-500" : "border-gray-300"
                }`}
            />
          </div>

          {/* Input Password */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`text-black w-full border rounded-xl px-4 py-3 text-base 
                focus:outline-none focus:ring-2 focus:ring-blue-400 
                transition ${
                  !password && error.includes("Password") ? "border-red-500" : "border-gray-300"
                }`}
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-md transform hover:scale-[1.02] transition-all duration-300"
          >
            {loading ? "Loading..." : "🚀 Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Belum punya akun?{" "}
          <span
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Daftar
          </span>
        </p>
      </div>

      {/* ✅ Popup Selamat Datang */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl text-center w-full max-w-sm animate-popup">
            <h2 className="text-xl font-bold text-gray-800">{popupMessage}</h2>
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
