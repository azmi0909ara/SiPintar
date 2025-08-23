"use client";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { db } from "../lib/firebaseConfig"; // Pastikan ini sesuai dengan konfigurasi Firebase Anda
import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";

export default function AdminPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    newRegistrations: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const registrasiRef = collection(db, "registrasi");

        // === Total Anak ===
        const snapshot = await getDocs(registrasiRef);
        const totalUsers = snapshot.size;

        // === Pendaftaran Baru Hari Ini ===
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const q = query(
          registrasiRef,
          where("createdAt", ">=", Timestamp.fromDate(today)),
          where("createdAt", "<", Timestamp.fromDate(tomorrow))
        );
        const todaySnapshot = await getDocs(q);
        const newRegistrations = todaySnapshot.size;

        setStats({ totalUsers, newRegistrations });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-2">Ringkasan data pendaftaran anak.</p>

        {/* Card Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-xl shadow-lg p-6 flex items-center justify-between transform hover:scale-105 transition">
            <div>
              <p className="text-lg font-medium">Total Anak</p>
              <h2 className="text-3xl font-bold mt-2">{stats.totalUsers}</h2>
            </div>
            <FiUsers className="text-5xl opacity-80" />
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl shadow-lg p-6 flex items-center justify-between transform hover:scale-105 transition">
            <div>
              <p className="text-lg font-medium">Pendaftaran Baru (Hari Ini)</p>
              <h2 className="text-3xl font-bold mt-2">{stats.newRegistrations}</h2>
            </div>
            <FiUserPlus className="text-5xl opacity-80" />
          </div>
        </div>

        {/* Section Tambahan */}
        <div className="mt-10 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Data Terbaru
          </h2>
          <p className="text-gray-500">
            Tabel atau grafik perkembangan anak bisa ditaruh di sini.
          </p>
        </div>
      </main>
    </div>
  );
}
