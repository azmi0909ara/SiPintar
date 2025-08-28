"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../lib/firebaseConfig";
import { collection, addDoc, Timestamp, updateDoc } from "firebase/firestore";

export default function RegisterPage() {
  const [namaAnak, setNamaAnak] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [wali, setWali] = useState("");
  const [nomor, setNomor] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !namaAnak ||
      !tanggalLahir ||
      !wali ||
      !nomor ||
      !email ||
      !alamat ||
      !password ||
      !confirmPassword
    ) {
      setError("Semua field harus diisi");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password dan Konfirmasi Password tidak sama");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "registrasi"), {
        namaAnak,
        tanggalLahir: Timestamp.fromDate(new Date(tanggalLahir)),
        wali,
        nomor,
        email,
        alamat,
        password, // ⚠ untuk production sebaiknya di-hash
        createdAt: Timestamp.now(),
      });

      await updateDoc(docRef, { docId: docRef.id });

      localStorage.setItem(
        "registrasi",
        JSON.stringify({
          docId: docRef.id,
          tanggalLahir: Timestamp.fromDate(new Date(tanggalLahir)),
          wali,
          nomor,
          email,
          alamat,
          password,
          createdAt: Timestamp.now(),
        })
      );

      setSuccess(true);
      setLoading(false);

      setTimeout(() => {
        router.push("/login");
      }, 2000);

      setNamaAnak("");
      setTanggalLahir("");
      setWali("");
      setNomor("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAlamat("");
    } catch (err) {
      console.error(err);
      setError("Gagal menyimpan data");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      <div className="relative z-10 w-full max-w-lg p-10 bg-white rounded-3xl shadow-2xl border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          ✨ Registrasi SiPintar
        </h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={namaAnak}
            onChange={(e) => setNamaAnak(e.target.value)}
            placeholder="Nama Anak"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={wali}
            onChange={(e) => setWali(e.target.value)}
            placeholder="Nama Wali/Orang Tua"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            value={nomor}
            onChange={(e) => setNomor(e.target.value)}
            placeholder="Nomor yang dapat dihubungi"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email aktif"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Konfirmasi Password"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat Lengkap"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-600 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {loading ? "Menyimpan..." : "Daftar 🚀"}
          </button>
        </form>
      </div>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full animate-bounce">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Berhasil!
            </h2>
            <p className="text-gray-700 mb-2">Registrasi berhasil dilakukan.</p>
            <p className="text-gray-500 text-sm">
              Anda akan diarahkan ke halaman login...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
