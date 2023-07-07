export interface CategoryData {
  data: Category[];
}

export interface Category {
  id: number;
  attributes: {
    categoryName: string;
  };
}
