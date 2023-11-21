"use client";

// Imports
import { menuItems } from "@/constants/menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the LeftBar component
export default function LeftBar() {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  //   Function to check if a menu is active based on the current pathname
  const isActive = (path: string) => {
    return pathname.endsWith(path);
  };

  //   Render the LeftBar component
  return (
    <div className="flex flex-col justify-center h-[100vh] mr-[10rem] gap-[2.3rem] font-semibold text-slate-600">
      {menuItems.map((item, index) => (
        <Link
          className={
            isActive(item.path)
              ? "text-right active text-rose-600"
              : "hover:text-rose-600 text-right"
          }
          key={index}
          href={item.path}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
