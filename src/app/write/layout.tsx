import LeftBar from "@/components/write/LeftBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write a Recipe",
  description: "Write your Recie",
};

export default function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center">
      <LeftBar />
      {children}
    </main>
  );
}
