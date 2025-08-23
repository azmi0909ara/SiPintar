"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiHome, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebaseConfig";

const menuItems = [
  { id: 1, label: "Dashboard", icon: <FiHome />, path: "/admin" },
  { id: 2, label: "Users", icon: <FiUsers />, path: "/admin/users" },
  { id: 3, label: "Report", icon: <FiSettings />, path: "/admin/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // redirect ke login setelah logout
    } catch (error) {
      console.error("Error saat logout:", error);
    }
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-950 to-purple-900 text-white flex flex-col min-h-screen">
      {/* Header */}
      <div className="px-6 py-6 text-2xl font-bold border-b border-white/20">
        Admin SiPintar
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.id} href={item.path}>
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
  );
}
