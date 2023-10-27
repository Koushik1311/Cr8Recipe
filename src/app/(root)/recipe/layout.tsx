import RightMenuBar from "@/components/Recipe/RightMenuBar";

export default function RightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <>{children}</>
      <>
        <RightMenuBar />
      </>
    </div>
  );
}
