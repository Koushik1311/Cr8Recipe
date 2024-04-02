import { recipeData } from "@/data/recipe/data";
import Image from "next/image";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

export default function RecipeList() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {recipeData.map((recipe, index) => (
          <div key={index} className="rounded-lg">
            <Image
              src={recipe.image}
              width={290}
              height={290}
              quality={100}
              priority={true}
              alt={recipe.title}
              className="w-[260px] h-[260px] object-cover rounded-md"
            />
            <h3 className="mt-4 text-base font-normal text-gray-700">
              {recipe.title}
            </h3>
            <p className="text-base font-light text-gray-500">
              {recipe.author}
            </p>
            <div className="flex mt-2 text-2xl">
              {[...Array(5)].map((_, i) =>
                i < Math.floor(recipe.ratting) ? (
                  <IoMdStar key={i} className={`text-2xl text-orange-500`} />
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
        ))}
      </div>
    </div>
  );
}
