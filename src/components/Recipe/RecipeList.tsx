import { GiChefToque } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";

export default function RecipeList() {
  return (
    <div className="w-screen flex items-center justify-center mx-auto relative">
      {/* All Recipes, New Recipes, Trending Recipes, Featured Recipes */}
      <div className="absolute lg:hidden">
        <GiChefToque />
      </div>
      <div className="w-[1200px] border-2">
        <div className="flex">
          <div className="flex flex-col text-sm font-semibold text-gray-400">
            <Link href="#" className="global-filter">
              All Recipes
            </Link>
            <Link href="#" className="global-filter">
              New Recipes
            </Link>
            <Link href="#" className="global-filter">
              Trending Recipes
            </Link>
            <Link href="#" className="global-filter">
              Featured Recipes
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
