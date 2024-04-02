import FilterBar from "@/components/Recipe/FilterBar";
import Filters from "@/components/Recipe/Filters";
import RecipeHeader from "@/components/Recipe/RecipeHeader";
import RecipeList from "@/components/Recipe/RecipeList";
import SearchBar from "@/components/Recipe/SearchBar";

export default function Recipe() {
  return (
    <main className="mx-auto">
      <section className="mt-16">
        <RecipeHeader />
      </section>
      <section className="flex justify-center mx-auto mt-16">
        <SearchBar />
      </section>
      <section>
        {/* Category, Filter Bar */}
        <div className="flex flex-row justify-between">
          <>
            <FilterBar />
          </>

          {/* Category by Breakfast, Lunch, Diner */}

          {/* Filter Button */}
          <>
            <Filters />
          </>
        </div>
      </section>

      <section className="mt-16">
        <RecipeList />
      </section>
    </main>
  );
}
