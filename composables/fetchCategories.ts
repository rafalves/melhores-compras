import { CategoryData, Category } from "~/types/Category";

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await useFetch<CategoryData>("/api/findCategory/");

  let categories: Category[] = [];

  if (!error.value) {
    data.value?.data.forEach((item) => {
      categories.push(item);
    });
  }
  return categories;
}
