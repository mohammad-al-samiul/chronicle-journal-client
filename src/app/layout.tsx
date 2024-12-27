import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Providers from "@/lib/Providers";
import Container from "@/components/ui/container";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reflect",
  description: "A Journaling App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
