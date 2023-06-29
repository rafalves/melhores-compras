export const useCategoryState = () =>
  useState<CategoryState>("categories", () => ({
    category: {},
  }));
