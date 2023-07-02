import { CategoryState } from "~/types/States";
import { Category } from "~/types/Category";

export const useCategoryState = () =>
  useState<CategoryState>("categories", () => ({
    categories: [],
  }));

export function fetchCategoryState(categories: Category[]) {
  const state = useCategoryState();
  categories.forEach((el) => {
    const hasCategory = state.value.categories.some(
      (category) =>
        category.name.toLocaleLowerCase().trim() ===
        el.attributes.categoryName.toLocaleLowerCase().trim()
    );
    if (!hasCategory) {
      state.value.categories.push({
        id: el.id,
        name: el.attributes.categoryName,
      });
    }
    state.value.categories.push();
  });
}
