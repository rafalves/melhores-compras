export interface CategoryData {
  data: Category[];
}

export interface Category {
  id: number,
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    label?: string;
    hierarchy?: string;
    articles: {
      data?: Article[];
    }
  }
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    minsToRead?: number;
    lead?: string;
    articleUpdated?: boolean;
    keywords?: string,
  };
};