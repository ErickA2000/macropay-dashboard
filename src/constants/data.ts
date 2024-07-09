import { CategoryServices } from "@Interfaces/category-services";


export function generateData(elements: number) {
  const categoryServicesArray: CategoryServices[] = [];

  for (let i = 1; i <= elements; i++) {
    categoryServicesArray.push({
      id: `${i}`,
      title: `Category ${i}`,
      description: `Description for category ${i}`,
      subCategory: [
        {
          id: `${i}-1`,
          title: `SubCategory ${i}-1`,
          description: `Description for subcategory ${i}-1`,
        },
        {
          id: `${i}-2`,
          title: `SubCategory ${i}-2`,
          description: `Description for subcategory ${i}-2`,
        },
      ],
    });
  }

  return categoryServicesArray;
}
