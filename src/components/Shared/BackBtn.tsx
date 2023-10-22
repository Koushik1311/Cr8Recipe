import { useRouter } from "next/navigation";

type BackBtnProps = {
  children: React.ReactNode;
};

export default function BackBtn({ children }: BackBtnProps) {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <button type="button" onClick={back}>
      {children}
    </button>
  );
}
