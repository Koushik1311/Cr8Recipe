import type { Metadata } from "next";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const metadata: Metadata = {
  title: "Cr8Recipe",
  description: "Next generation Recipe Sharing app",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
