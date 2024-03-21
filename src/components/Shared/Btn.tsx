import Link from "next/link";

type BtnProps = {
  children: React.ReactNode;
  goTo: string;
};

export default function Btn({ children, goTo }: BtnProps) {
  return (
    <button className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-[0.6rem] px-[1.5rem] rounded-full text-sm font-semibold transition-all">
      <Link href={goTo}>{children}</Link>
    </button>
  );
}
