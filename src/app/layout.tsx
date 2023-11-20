import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LoginContextProvider from "../contexts/LoginContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cr8Recipe",
  description: "Next generation Recipe Sharing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 container mx-auto`}>
        <LoginContextProvider>{children}</LoginContextProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
      </body>
    </html>
  );
}
