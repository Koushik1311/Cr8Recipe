// Imports
import {
  searchCategory,
  createCategory,
} from "@/api-calls/write/category.api-call";
import { CategoryType } from "@/types/write/category.type";
import { ChangeEvent, useState } from "react";

type AddCategoryProps = {
  onCategorySelect: (categoryId: string) => void;
};

export default function AddCategory({ onCategorySelect }: AddCategoryProps) {
  // State for search term
  const [searchTerm, setSearchTerm] = useState<string>("");
  // State for the list of categories
  const [categories, setCategories] = useState<any[]>([]);
  // State for the new category being created
  const [newCategory, setNewCategory] = useState<CategoryType>({
    title: "",
    description: "",
  });

  // State for model visibility
  const [showModel, setShowModel] = useState(false);
  // State to track if no categories are found
  const [noCategoriesFound, setNoCategoriesFound] = useState(false);

  // Event handler for search input
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue.length > 0) {
      const result = await searchCategory(searchValue);

      if (result && result.length > 0) {
        setCategories(result);
        setNoCategoriesFound(false);
      } else {
        setCategories([]);
        setNoCategoriesFound(true);
      }
    } else {
      setCategories([]);
      setNoCategoriesFound(false);
    }
  };

  // Event handler for creating a new category
  const handleCreateCategory = async () => {
    if (newCategory.title.trim() !== "") {
      const createdCategory = await createCategory(newCategory);
      if (createdCategory) {
        setCategories([newCategory]);
        setNewCategory({ title: "", description: "" });
        setShowModel(false);
      }
    }
  };

  // Event handler for selecting a category
  const handleCategorySelect = (categoryId: string) => {
    onCategorySelect(categoryId);
  };

  return (
    <div>
      {/* Search input for filtering categories */}
      <input
        className="border-2 border-gray-500/50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 rounded-md w-[30rem]"
        type="text"
        placeholder="Search for categories..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* List of categories */}
      <ul>
        {categories.length > 0 ? (
          categories.map((category: any) => (
            <li
              className="cursor-pointer"
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.title}
            </li>
          ))
        ) : noCategoriesFound ? (
          // Display message when no categories are found
          <p>
            No categories found. Would you like to create a new one?
            <button onClick={() => setShowModel(true)}>Create New</button>
          </p>
        ) : null}
      </ul>
      {/* Model for creating a new category */}
      {showModel && (
        <div>
          <div>
            <span onClick={() => setShowModel(false)}>&times;</span>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="New category name"
              value={newCategory.title}
              onChange={(e) =>
                setNewCategory({ ...newCategory, title: e.target.value })
              }
            />
            {/* Input for new category description */}
            <input
              type="text"
              name="description"
              id="description"
              placeholder="New category name"
              value={newCategory.description}
              onChange={(e) =>
                setNewCategory({ ...newCategory, description: e.target.value })
              }
            />
            {/* Button for creating the new category */}
            <button onClick={handleCreateCategory}>Create Category</button>
          </div>
        </div>
      )}
    </div>
  );
}
