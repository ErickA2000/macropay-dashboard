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

// export function useCategories() {
//   const [categories, setCategories] = useState<CategoryServices[]>([]);

//   const add = (category: CategoryServices) => {
//     setCategories((array) => [...array, category]);
//   };

//   const addSubCategory = (mainCategoryId: string, categoryInput: Category) => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) => {
//         if (category.id === mainCategoryId) {
//           return {
//             ...category,
//             subCategory: [...category.subCategory, categoryInput],
//           };
//         }
//         return category;
//       })
//     );
//   };

//   const remove = (index: number) => {
//     setCategories((array) => [
//       ...array.slice(0, index),
//       ...array.slice(index + 1, array.length),
//     ]);
//   };

//   const removeSubCategory = (mainCategoryId: string, subCategoryId: string) => {
//     // setCategories((prevCategories) =>
//     //   prevCategories.map((category) => {
//     //     if (category.id === mainId) {
//     //       return {
//     //         ...category,
//     //         subCategory: category.subCategory.filter(
//     //           (subCategory) => subCategory.id !== subId
//     //         ),
//     //       };
//     //     }
//     //     return category;
//     //   })
//     // );
//     setCategories((prevCategories) =>
//       prevCategories.map((category) => {
//         if (category.id === mainCategoryId) {
//           return {
//             ...category,
//             subCategory: category.subCategory.filter(
//               (subCat) => subCat.id !== subCategoryId
//             ),
//           };
//         }
//         return category;
//       })
//     );
//   };

//   return {
//     categories,
//     add,
//     addSubCategory,
//     remove,
//     removeSubCategory,
//   };
// }

export function ArrayStateProvider({ children }: ArrayStateProviderProps) {
  const [categories, setCategories] = useState<CategoryServices[]>([]);

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

  return (
    <arrayStateContext.Provider
      value={{
        items: categories,
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
  
  if(context === undefined){
    throw new Error("useArrayState must be used within an ArrayStateProvider");
  }
  return context;
}