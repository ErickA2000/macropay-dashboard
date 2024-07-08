export interface CategoryServices extends Category {
  subCategory: Category[]
}

interface Category{
  id: string;
  title: string;
  description: string;
}
