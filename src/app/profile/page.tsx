"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/app/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const docRef = doc(db, "registrasi", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
          setFormData(docSnap.data());
        } else {
          const defaultData = {
            nama: currentUser.displayName || "",
            email: currentUser.email,
            kelas: "",
            phone: "",
            alamat: "",
            tglLahir: "",
          };
          await setDoc(docRef, defaultData); // buatkan kalau belum ada
          setProfile(defaultData);
          setFormData(defaultData);
        }
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSave = async () => {
    if (!user) return;
    const docRef = doc(db, "registrasi", user.uid);
    await updateDoc(docRef, formData);
    setProfile(formData);
    setEditMode(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user || !profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Silakan login terlebih dahulu.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 p-6 md:p-12 lg:p-20 pt-16 md:pt-28">
      <div className="max-w-4xl mx-auto space-y-8 pt-10">
        <h1 className="text-3xl font-bold text-center">Profil Saya</h1>

        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
              {profile?.nama?.[0] || "U"}
            </div>

            <div className="flex-1 space-y-4">
              {editMode ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Nama</label>
                    <input
                      type="text"
                      value={formData.nama}
                      onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                      }
                      className="w-full border rounded-xl px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full border rounded-xl px-4 py-2 bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Kelas</label>
                    <select
                      value={formData.kelas || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, kelas: e.target.value })
                      }
                      className="w-full border rounded-xl px-4 py-2"
                    >
                      <option value="">-- Pilih Kelas --</option>
                      {[1, 2, 3, 4, 5, 6].map((k) => (
                        <option key={k} value={k}>
                          Kelas {k} SD
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Nomor Telepon
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border rounded-xl px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      value={formData.tglLahir}
                      onChange={(e) =>
                        setFormData({ ...formData, tglLahir: e.target.value })
                      }
                      className="w-full border rounded-xl px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Alamat</label>
                    <textarea
                      value={formData.alamat}
                      onChange={(e) =>
                        setFormData({ ...formData, alamat: e.target.value })
                      }
                      className="w-full border rounded-xl px-4 py-2"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-semibold">{profile.nama}</h2>
                  <p className="text-gray-600">
                    {profile.kelas
                      ? `Siswa Kelas ${profile.kelas} SD`
                      : "Belum memilih kelas"}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{profile.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Nomor Telepon</p>
                      <p className="font-medium">{profile.phone || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tanggal Lahir</p>
                      <p className="font-medium">{profile.tglLahir || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Alamat</p>
                      <p className="font-medium">{profile.alamat || "-"}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-center gap-4">
          {editMode ? (
            <>
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
              >
                Simpan
              </button>
              <button
                onClick={() => {
                  setFormData(profile);
                  setEditMode(false);
                }}
                className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300 transition"
              >
                Batal
              </button>
            </>
          ) : (
            <button
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
              onClick={() => setEditMode(true)}
            >
              Edit Profil
            </button>
          )}
          <button
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}
