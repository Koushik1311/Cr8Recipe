import Link from "next/link";

type BtnProps = {
  children: React.ReactNode;
  goTo: string;
};

export default function Btn({ children, goTo }: BtnProps) {
  return (
    <button className="hover:bg-[#3C6E38] bg-[#CAF0C7] text-[#3C6E38] hover:text-white py-[0.6rem] px-[1.5rem] border-none rounded-full text-sm font-semibold transition-all">
      <Link href={goTo}>{children}</Link>
    </button>
  );
}
