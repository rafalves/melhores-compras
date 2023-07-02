import { useCategoryState } from "./states";

export const checkSlug = (slug: string): number | string => {
  const state = useCategoryState();

  const isCategory = state.value.categories.some(
    (category) =>
      category.name.toLocaleLowerCase().trim() ===
      slug.toLocaleLowerCase().trim()
  );

  const index = state.value.categories.findIndex(
    (category) =>
      category.name.toLocaleLowerCase().trim() ===
      slug.toLocaleLowerCase().trim()
  );

  console.log("isCategory: " + isCategory);
  console.log("index: " + index);

  if (isCategory) {
  }

  return 1;
};
