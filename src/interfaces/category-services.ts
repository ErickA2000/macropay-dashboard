import { ReactNode } from "react";

export interface CategoryServices extends Category {
  subCategory: Category[]
}

export interface Category{
  id: string;
  title: string;
  description: string;
}

export interface ArrayStateContextType {
  items:CategoryServices[],
  add: (category: CategoryServices) => void;
  addSubCategory: (mainCategoryId: string, categoryInput: Category) => void;
  remove: (index: number) => void;
  removeSubCategory: (mainCategoryId: string, subCategoryId: string) => void;
}

export interface ArrayStateProviderProps {
  children: ReactNode;
}