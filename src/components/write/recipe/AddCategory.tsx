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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categories, setCategories] = useState<any[]>([]);
  const [newCategory, setNewCategory] = useState<CategoryType>({
    title: "",
    description: "",
  });

  const [showModel, setShowModel] = useState(false);
  const [noCategoriesFound, setNoCategoriesFound] = useState(false);

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

  const handleCategorySelect = (categoryId: string) => {
    onCategorySelect(categoryId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for categories..."
        value={searchTerm}
        onChange={handleSearch}
      />
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
          <p>
            No categories found. Would you like to create a new one?
            <button onClick={() => setShowModel(true)}>Create New</button>
          </p>
        ) : null}
      </ul>
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
            <button onClick={handleCreateCategory}>Create Category</button>
          </div>
        </div>
      )}
    </div>
  );
}
