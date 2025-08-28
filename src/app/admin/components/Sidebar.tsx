"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiHome, FiUsers, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { auth } from "@/app/lib/firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";

const menuItems = [
  { id: 1, label: "Dashboard", icon: <FiHome />, path: "/admin" },
  { id: 2, label: "Users", icon: <FiUsers />, path: "/admin/users" },
  { id: 3, label: "Report", icon: <FiSettings />, path: "/admin/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // untuk toggle sidebar mobile

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error saat logout:", error);
    }
  };

  return (
    <>
      {/* Hamburger untuk mobile */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-purple-700 text-white p-2 rounded-md shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu className="text-xl" />
      </button>

      {/* Overlay untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full h-screen w-64 bg-gradient-to-b from-indigo-950 to-purple-900 text-white flex flex-col transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        {/* Header */}
        <div className="px-6 py-6 text-2xl font-bold border-b border-white/20 flex items-center justify-between">
          <span>Admin SiPintar</span>
          {/* Tombol close untuk mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.id} href={item.path} onClick={() => setIsOpen(false)}>
                <div
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      isActive
                        ? "bg-purple-700 text-white font-semibold shadow-md scale-[1.02]"
                        : "text-gray-300 hover:bg-purple-800 hover:text-white"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/20">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            <FiLogOut className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
