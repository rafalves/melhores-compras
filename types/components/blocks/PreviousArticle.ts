export interface PreviousArticle {
  id: number,
  __component: string,
  label?: string,
  articles?: Article[]
}

export interface Article {
  id?: number;
  attributes?: {
    title?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    minsToRead?: number;
    lead?: string;
    articleUpdated?: boolean;
    keywords?: string,
  };
};