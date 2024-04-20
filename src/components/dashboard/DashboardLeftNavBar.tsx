"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { GiCampCookingPot } from "react-icons/gi";
import { RiDashboardFill, RiDraftFill } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

export default function DashboardLeftNavBar() {
  const [showRecipeMenu, setShowRecipeMenu] = useState<boolean>(false);

  const toggleRecipeButton = () => {
    setShowRecipeMenu(!showRecipeMenu);
  };

  return (
    <div className="w-52 pl-10 pt-10 flex flex-col space-y-6 text-xl">
      <Link href="/dashboard" className="flex flex-row items-center">
        <RiDashboardFill />
        <>Dashboard</>
      </Link>
      <div>
        <button
          onClick={toggleRecipeButton}
          className="flex flex-row items-center"
        >
          <GiCampCookingPot />
          <>Recipe</>
        </button>
        {showRecipeMenu && (
          <div className="flex flex-col space-y-3 mt-3 ml-3">
            <Link
              href="/dashboard/published"
              className="flex flex-row items-center"
            >
              <MdOutlinePublishedWithChanges />
              <>Published</>
            </Link>
            <Link
              href="/dashboard/draft"
              className="flex flex-row items-center"
            >
              <RiDraftFill />
              <>Deaft</>
            </Link>
          </div>
        )}
      </div>
      <Link href="/dashboard/profile" className="flex flex-row items-center">
        <FaUser />
        <>Profile</>
      </Link>
    </div>
  );
}
