"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebaseConfig"; 
import Sidebar from "../components/Sidebar"; 
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { FiUsers } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type User = {
  id: string;
  namaAnak: string;
  email: string;
  wali: string;
  alamat: string;
  nomor: string;
  role: string;
  password: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<User | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("namaAsc"); // default sort

  // Fetch data
  const fetchUsers = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "registrasi"));
    const data: User[] = [];
    querySnapshot.forEach((docSnap) => {
      const userData = docSnap.data();
      data.push({
        id: docSnap.id,
        namaAnak: userData.namaAnak || "",
        email: userData.email || "",
        wali: userData.wali || "",
        alamat: userData.alamat || "",
        nomor: userData.nomor || "",
        role: userData.role || "user",
        password: userData.password || "",
      });
    });
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete
  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "registrasi", id));
    fetchUsers();
  };

  // Edit
  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setFormData(user);
    setIsEditing(true);
  };

  // Save
  const handleSave = async () => {
    if (!formData) return;
    const userRef = doc(db, "registrasi", formData.id);
    await updateDoc(userRef, {
      namaAnak: formData.namaAnak,
      email: formData.email,
      wali: formData.wali,
      alamat: formData.alamat,
      nomor: formData.nomor,
      role: formData.role,
      password: formData.password,
    });
    setIsEditing(false);
    setSelectedUser(null);
    fetchUsers();
  };

  // Filter + Sort
  const filteredUsers = users
    .filter((u) =>
      u.namaAnak.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "namaAsc") return a.namaAnak.localeCompare(b.namaAnak);
      if (sortBy === "namaDesc") return b.namaAnak.localeCompare(a.namaAnak);
      if (sortBy === "emailAsc") return a.email.localeCompare(b.email);
      if (sortBy === "emailDesc") return b.email.localeCompare(a.email);
      return 0;
    });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg">
            <FiUsers className="text-3xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Manajemen Pengguna
            </h1>
            <p className="text-gray-500">Kelola data anak & wali</p>
          </div>
        </div>

        {/* Search & Sort */}
        <div className="text-black flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Cari nama atau email..."
            className="border rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="namaAsc">Nama (A-Z)</option>
            <option value="namaDesc">Nama (Z-A)</option>
            <option value="emailAsc">Email (A-Z)</option>
            <option value="emailDesc">Email (Z-A)</option>
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow bg-white">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base">
                <tr>
                  <th className="px-6 py-3">Nama Anak</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Wali</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Password</th>
                  <th className="px-6 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, idx) => (
                  <tr
                    key={user.id}
                    className={`border-b ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-indigo-50 transition`}
                  >
                    <td className="px-6 py-3">{user.namaAnak}</td>
                    <td className="px-6 py-3">{user.email}</td>
                    <td className="px-6 py-3">{user.wali}</td>
                    <td className="px-6 py-3">{user.role}</td>
                    <td className="px-6 py-3">
                      {user.password ? "••••••" : "-"}
                    </td>
                    <td className="px-6 py-3 flex gap-3">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                        onClick={() => {
                          setSelectedUser(user);
                          setIsEditing(false);
                        }}
                      >
                        Preview
                      </button>
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={() => handleDelete(user.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal Preview / Edit */}
        <AnimatePresence>
          {selectedUser && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl w-full max-w-lg p-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <h2 className="text-xl font-semibold mb-4 text-indigo-700">
                  {isEditing ? "Edit Pengguna" : "Detail Pengguna"}
                </h2>

                {isEditing && formData ? (
                  <div className="text-black space-y-3">
                    {[
                      { label: "Nama Anak", key: "namaAnak", type: "text" },
                      { label: "Email", key: "email", type: "email" },
                      { label: "Wali", key: "wali", type: "text" },
                      { label: "Alamat", key: "alamat", type: "text" },
                      { label: "Nomor", key: "nomor", type: "text" },
                      { label: "Role", key: "role", type: "text" },
                      { label: "Password", key: "password", type: "password" },
                    ].map((field) => (
                      <div key={field.key} className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                          value={(formData as any)[field.key]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.key]: e.target.value,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Nama Anak:</strong> {selectedUser.namaAnak}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedUser.email}
                    </p>
                    <p>
                      <strong>Wali:</strong> {selectedUser.wali}
                    </p>
                    <p>
                      <strong>Alamat:</strong> {selectedUser.alamat}
                    </p>
                    <p>
                      <strong>Nomor:</strong> {selectedUser.nomor}
                    </p>
                    <p>
                      <strong>Role:</strong> {selectedUser.role}
                    </p>
                    <p>
                      <strong>Password:</strong>{" "}
                      {selectedUser.password ? "••••••" : "-"}
                    </p>
                  </div>
                )}

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    className="text-black px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={() => setSelectedUser(null)}
                  >
                    Tutup
                  </button>
                  {isEditing ? (
                    <button
                      className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90"
                      onClick={handleSave}
                    >
                      Simpan
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:opacity-90"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
