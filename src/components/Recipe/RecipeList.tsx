import { recipeData } from "@/data/recipe/data";
import Image from "next/image";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { GiChefToque } from "react-icons/gi";
import Link from "next/link";

export default function RecipeList() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-9">
        {recipeData.map((recipe, index) => (
          <div key={index} className="rounded-lg">
            <Image
              src={recipe.image}
              width={290}
              height={290}
              quality={100}
              priority={true}
              alt={recipe.title}
              className="w-screen aspect-square md:w-[260px] md:h-[260px] object-cover rounded-md"
            />
            <div className="flex flex-row mt-4">
              <div className="grow">
                <h3 className="text-base font-normal text-gray-700">
                  <Link href={`/recipe/${recipe.slag}`}>{recipe.title}</Link>
                </h3>
                <p className="text-base font-light text-gray-500">
                  {recipe.author}
                </p>
                <div className="flex mt-2 text-2xl">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(recipe.ratting) ? (
                      <IoMdStar
                        key={i}
                        className={`text-2xl text-orange-500`}
                      />
                    ) : i === Math.floor(recipe.ratting) &&
                      recipe.ratting % 1 !== 0 ? (
                      <IoMdStarHalf
                        key={i}
                        className={`text-2xl text-orange-500`}
                      />
                    ) : (
                      <IoMdStar key={i} className={`text-2xl text-gray-300`} />
                    )
                  )}
                </div>
              </div>
              <div className="flex-none">
                <button className="bg-orange-600 w-10 h-10 flex items-center justify-center rounded-full">
                  <GiChefToque className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
