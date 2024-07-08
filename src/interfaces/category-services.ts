export interface CategoryServices extends Category {
  subCategory: Category[]
}

export interface Category{
  id: string;
  title: string;
  description: string;
}
