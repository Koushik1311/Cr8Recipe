import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CiUser } from "react-icons/ci";

type UserMenuProps = {
  handleLogout: () => void;
};

export default function UserMenu({ handleLogout }: UserMenuProps) {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside the user menu
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the user menu, close it
        setShowUserMenu(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleUserBtn = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <div className="relative" ref={userMenuRef}>
      {/* <Link className="mr-4" href="/write/recipe">
              Write
            </Link> */}
      {/* <CiUser className="p-2 border rounded-full text-4xl cursor-pointer" /> */}
      <button
        className="p-2 border rounded-full text-xl cursor-pointer"
        onClick={toggleUserBtn}
      >
        <CiUser />
      </button>
      {showUserMenu && (
        <div className="absolute border rounded-lg text-sm font-medium py-4 px-7 mt-4 bg-white w-auto right-0">
          <div className="flex flex-col items-start space-y-3 text-gray-600">
            {/* Dashboard */}
            <Link
              href="/dashboard"
              className="hover:text-gray-950 transition-colors"
            >
              Dashboard
            </Link>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="hover:text-gray-950 transition-colors"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
