"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";
import { db } from "@/app/lib/firebaseConfig";

export default function ReportsPage() {
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [monthlyData, setMonthlyData] = useState<any[]>([]);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Ambil data registrasi untuk laporan
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "registrasi"));
      const daily: Record<string, number> = {};
      const monthly: Record<string, number> = {};

      snapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.createdAt?.toDate();
        if (!date) return;

        const dayKey = date.toISOString().split("T")[0];
        const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;

        daily[dayKey] = (daily[dayKey] || 0) + 1;
        monthly[monthKey] = (monthly[monthKey] || 0) + 1;
      });

      setDailyData(Object.entries(daily).map(([date, count]) => ({ date, count })));
      setMonthlyData(Object.entries(monthly).map(([month, count]) => ({ month, count })));
    };

    fetchData();
  }, []);

  // Ambil pengumuman
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const snapshot = await getDocs(collection(db, "pengumuman"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAnnouncements(data);
    };
    fetchAnnouncements();
  }, []);

  // Tambah pengumuman baru
  const addAnnouncement = async () => {
    if (!title || !content) return;
    await addDoc(collection(db, "pengumuman"), {
      title,
      content,
      createdAt: serverTimestamp(),
    });
    setTitle("");
    setContent("");
    alert("Pengumuman berhasil ditambahkan!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Laporan & Statistik</h1>

        {/* Grafik Harian */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-black text-xl font-semibold mb-4">Jumlah Pendaftaran Harian</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik Bulanan */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-black text-xl font-semibold mb-4">Jumlah Pendaftaran Bulanan</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pengumuman */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-black text-xl font-semibold mb-4">Pengumuman</h2>

          <div className="text-black mb-6 space-y-3">
            <input
              type="text"
              placeholder="Judul Pengumuman"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <textarea
              placeholder="Isi Pengumuman"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              rows={4}
            />
            <button
              onClick={addAnnouncement}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Tambah Pengumuman
            </button>
          </div>

          <div className="space-y-4">
            {announcements.map((a) => (
              <div key={a.id} className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-bold">{a.title}</h3>
                <p>{a.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
