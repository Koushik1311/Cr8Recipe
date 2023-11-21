import LeftBar from "@/components/Write/LeftBar";
import { EdgeStoreProvider } from "@/lib/edgestore";
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
    <main className="grid grid-cols-3 justify-center">
      <LeftBar />
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </main>
  );
}
