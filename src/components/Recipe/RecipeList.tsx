export default function RecipeList() {
  return (
    <section className="w-full mt-[1.5rem]">
      <h1 className="text-[2.6rem] font-semibold">Recipes</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[1.2rem] gap-y-[1.2rem] mt-[1.9rem]">
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-br-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <h2 className="font-light text-lg text-slate-500 mt-[0.75rem]">
            Delicious Bread
          </h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">
            Poke Bowl with Salmon
          </h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/16803393/pexels-photo-16803393/free-photo-of-pizzas-on-the-table-at-the-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">Pizzas</h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">
            Pancakes with Berries and Marple Syrup
          </h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-a-bowl-of-ramen-with-chopsticks-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">
            A bowl of ramen with chopsticks and eggs
          </h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">
            Pancake With Sliced Strawberry
          </h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">Fruit Dessert</h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">
            Green Leafy Vegetable Dish in Gray Steel Bowl With Fork
          </h2>
        </li>
        <li>
          <img
            className="w-full object-cover h-[12rem] rounded-bl-[2.6rem] rounded-t-md rounded-r-md"
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h2 className="font-medium mt-[1.2rem] ml-[0.8rem]">
            Cooked Seafoods
          </h2>
        </li>
      </ul>
    </section>
  );
}
