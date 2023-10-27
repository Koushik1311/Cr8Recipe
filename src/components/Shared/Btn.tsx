import Link from "next/link";

type BtnProps = {
  children: React.ReactNode;
  goTo: string;
};

export default function Btn({ children, goTo }: BtnProps) {
  return (
    <button className="bg-slate-950 text-white py-[0.6rem] px-[1rem] border-none rounded-full text-sm font-semibold">
      <Link href={goTo}>{children}</Link>
    </button>
  );
}
