"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import ResponsivNav from "@/Components/Home/Navebar/Navbar";
import Footer from "@/Components/Home/Footer/Footer";
import ScrollToTop from "@/Components/Helper/ScrollToTop";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // list route yang navbarnya TIDAK ingin ditampilkan
  const hideNavbarRoutes = ["/Dashboard", "/login", "/register"];

  const showNavbar = !hideNavbarRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <ResponsivNav />}
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
