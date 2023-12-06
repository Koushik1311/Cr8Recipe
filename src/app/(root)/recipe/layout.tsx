export default function RightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <>{children}</>
    </div>
  );
}
