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
    <main className="flex">
      <div className="flex flex-col justify-center items-start h-[100vh]">
        <button>Recipe</button>
        <button>Ingredient</button>
        <button>Step</button>
      </div>
      {children}
    </main>
  );
}
