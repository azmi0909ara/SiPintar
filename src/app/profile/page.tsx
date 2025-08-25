"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  doc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

interface UserProfile {
  docId: string;
  email: string;
  namaAnak?: string;
  nama?: string;
  role: string;
  kelas?: string;
  nomor?: string;
  tanggalLahir?: number;
  alamat?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    console.log("Stored user: ", storedUser);

    if (storedUser) {
      const parsed: any = JSON.parse(storedUser);

      // konversi tanggal lahir Firestore Timestamp ke number (ms)
      if (parsed.tanggalLahir) {
        if (
          typeof parsed.tanggalLahir === "object" &&
          parsed.tanggalLahir.seconds
        ) {
          parsed.tanggalLahir = parsed.tanggalLahir.seconds * 1000;
        } else if (typeof parsed.tanggalLahir === "string") {
          parsed.tanggalLahir = Number(parsed.tanggalLahir);
        }
      }

      setProfile(parsed);
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  // simpan perubahan profile ke localStorage
  const saveProfile = async (updated: UserProfile & { docId?: string }) => {
    console.log("docid: ", updated);

    try {
      if (!updated.docId) {
        throw new Error(
          "User tidak punya docId. Pastikan disimpan saat registrasi."
        );
      }

      // update Firestore pakai docId, bukan uid
      const userRef = doc(db, "registrasi", updated.docId);

      await setDoc(
        userRef,
        {
          namaAnak: updated.namaAnak ?? null,
          role: updated.role ?? "user",
          kelas: updated.kelas ?? null,
          nomor: updated.nomor ?? null,
          tanggalLahir: updated.tanggalLahir
            ? Timestamp.fromMillis(updated.tanggalLahir)
            : null,
          alamat: updated.alamat ?? null,
          email: updated.email,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      // update localStorage juga
      setProfile(updated);
      localStorage.setItem("user", JSON.stringify(updated));

      console.log("✅ Profil berhasil diupdate ke Firestore");
    } catch (error) {
      console.error("❌ Gagal update profil:", error);
    }
  };

  const formatTanggal = (timestamp?: number) => {
    if (!timestamp || isNaN(timestamp)) return "-";
    return new Date(timestamp).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const toInputDate = (timestamp?: number) => {
    if (!timestamp || isNaN(timestamp)) return "";
    return new Date(timestamp).toISOString().split("T")[0];
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold">🔄 Memuat profil...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 p-6 md:p-12 lg:p-20 pt-16 md:pt-28">
      <div className="max-w-4xl mx-auto space-y-8 pt-10">
        <h1 className="text-3xl font-bold text-center">Profil Saya</h1>

        {/* Card Profile */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
              {profile?.nama?.[0] || "U"}
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  {profile.namaAnak || "User"}
                </h2>
                <p className="text-gray-600">
                  {profile.kelas
                    ? `Siswa Kelas ${profile.kelas} SD`
                    : "Belum memilih kelas"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nomor Telepon</p>
                  <p className="font-medium">{profile.nomor || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tanggal Lahir</p>
                  <p className="font-medium">
                    {formatTanggal(profile.tanggalLahir)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Alamat</p>
                  <p className="font-medium">{profile.alamat || "-"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Mode */}
        {editMode && (
          <div className="bg-white shadow rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold mb-3">Edit Profil</h3>

            {/* Pilih Kelas */}
            <div>
              <label className="text-sm text-gray-600">Kelas</label>
              <select
                value={profile.kelas || ""}
                onChange={(e) =>
                  setProfile({ ...profile, kelas: e.target.value })
                }
                className="w-full border rounded-xl px-4 py-2 mt-1"
              >
                <option value="">-- Pilih Kelas --</option>
                {[1, 2, 3, 4, 5, 6].map((k) => (
                  <option key={k} value={k}>
                    Kelas {k} SD
                  </option>
                ))}
              </select>
            </div>

            {/* Edit Tanggal Lahir */}
            <div>
              <label className="text-sm text-gray-600">Tanggal Lahir</label>
              <input
                type="date"
                className="w-full border rounded-xl px-3 py-2 mt-1"
                value={toInputDate(profile.tanggalLahir)}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    tanggalLahir: e.target.value
                      ? new Date(e.target.value).getTime()
                      : undefined,
                  })
                }
              />
            </div>
          </div>
        )}

        {/* Tombol Aksi */}
        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
            onClick={() => {
              if (editMode && profile) {
                saveProfile(profile); // commit ke localStorage
              }
              setEditMode((prev) => !prev);
            }}
          >
            {editMode ? "Simpan" : "Edit Profil"}
          </button>
          <button
            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300 transition"
            onClick={handleLogout}
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}