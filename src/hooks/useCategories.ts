import { CategoryServices } from "@Interfaces/category-services";
import { useState } from "react";

export function useCategories() {
  const [categories, setCategories] = useState<CategoryServices[]>([]);

  const add = (category: CategoryServices) => {
    setCategories((array) => [...array, category]);
  };

  const remove = (index: number) => {
    setCategories((array) => [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length),
    ]);
  };

  const removeSubCategory = (mainCategoryId: string, subCategoryId: string) => {
    // setCategories((prevCategories) =>
    //   prevCategories.map((category) => {
    //     if (category.id === mainId) {
    //       return {
    //         ...category,
    //         subCategory: category.subCategory.filter(
    //           (subCategory) => subCategory.id !== subId
    //         ),
    //       };
    //     }
    //     return category;
    //   })
    // );
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === mainCategoryId) {
          return {
            ...category,
            subCategory: category.subCategory.filter(
              (subCat) => subCat.id !== subCategoryId
            ),
          };
        }
        return category;
      })
    );
  };

  return {
    categories,
    add,
    remove,
    removeSubCategory
  };
}
