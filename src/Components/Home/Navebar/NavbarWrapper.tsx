"use client";
import { usePathname } from "next/navigation";
import ResponsivNav from "@/Components/Home/Navebar/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  if (pathname === "/dashboard") return null;
  return <ResponsivNav />;
}
