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
    photo?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: {
            small?: {
              url?: string;
            };
            thumbnail?: {
              url?: string;
            };
            large?: {
              url?: string;
            };
            medium?: {
              url?: string;
            };
          };
        };
      };
    };
  };
}
