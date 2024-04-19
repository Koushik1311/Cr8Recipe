import DashboardLeftNavBar from "@/components/dashboard/DashboardLeftNavBar";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to your Dashboard!",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row">
      <DashboardLeftNavBar />
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </main>
  );
}
