import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LoginContextProvider from "../contexts/LoginContextProvider";
import ProgressBarProvider from "@/contexts/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <ProgressBarProvider>
          <LoginContextProvider>{children}</LoginContextProvider>
        </ProgressBarProvider>
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
