export interface AuthorsData {
  data?: Author[];
}

export interface AuthorData {
  data?: Author;
}

export interface Author {
  id?: number;
  attributes?: {
    name?: string;
    description?: string;
    createdAt?: string;
    updatedAt: string;
    publishedAt: string;
    photo?: Media,
  };
}
