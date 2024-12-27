import Footer from "@/pages/shared/footer/footer";
import Navbar from "@/pages/shared/navbar/navbar";
import React, { ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
