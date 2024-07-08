import {
  ArrayStateContextType,
  ArrayStateProviderProps,
  Category,
  CategoryServices,
} from "@Interfaces/category-services";
import { createContext, useContext, useState } from "react";

const arrayStateContext = createContext<ArrayStateContextType | undefined>(
  undefined
);

export function ArrayStateProvider({ children }: ArrayStateProviderProps) {
  const [categories, setCategories] = useState<CategoryServices[]>([]);

  const find = (parentId?: string, childrenId?: string) => {
    if (parentId && childrenId) {
      const categoryLevel1 = categories.filter(
        (value) => value.id === parentId
      );

      const categoryLevel2 = categoryLevel1[0].subCategory.filter(
        (value) => value.id === childrenId
      );
      return categoryLevel2[0];
    } else {
      const category = categories.filter((value) => value.id === parentId);
      return category[0];
    }
  };

  const add = (category: CategoryServices) => {
    setCategories((array) => [...array, category]);
  };

  const addSubCategory = (mainCategoryId: string, categoryInput: Category) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === mainCategoryId) {
          return {
            ...category,
            subCategory: [...category.subCategory, categoryInput],
          };
        }
        return category;
      })
    );
  };

  const remove = (index: number) => {
    setCategories((array) => [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length),
    ]);
  };

  const removeSubCategory = (mainCategoryId: string, subCategoryId: string) => {
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

  return (
    <arrayStateContext.Provider
      value={{
        items: categories,
        find,
        add,
        addSubCategory,
        remove,
        removeSubCategory,
      }}>
      {children}
    </arrayStateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCategories = (): ArrayStateContextType => {
  const context = useContext(arrayStateContext);

  if (context === undefined) {
    throw new Error("useArrayState must be used within an ArrayStateProvider");
  }
  return context;
};
