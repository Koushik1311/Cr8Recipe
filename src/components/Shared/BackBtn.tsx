"use client";

// external import
import { useRouter } from "next/navigation";

// type defination
type BackBtnProps = {
  children: React.ReactNode;
};

export default function BackBtn({ children }: BackBtnProps) {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <button
      className="text-sm flex flex-row items-center justify-center gap-[0.4rem]"
      type="button"
      onClick={back}
    >
      {children}
      <span>Back</span>
    </button>
  );
}
