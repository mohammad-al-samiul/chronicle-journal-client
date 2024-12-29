import Header from "@/components/header";
import Footer from "@/pages/shared/footer/footer";
import React, { ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
