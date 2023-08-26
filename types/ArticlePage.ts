import { Media } from "./components/Media";
import { UnionComponent } from "./components/UnionComponents";

export interface ArticleData {
  data: Article;
  meta: {};
};

export interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    minsToRead: number;
    lead: string;
    articleUpdated: boolean;
    keywords: string,
    category: Category;
    authors: AuthorsData;
    imgBanner: Media;
    components: UnionComponent[]
  };
};

export interface AuthorsData {
  data: Author[];
}

export interface Author {
  id: number;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}

export interface Category {
  data: {
    id: number,
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      label: string;
      hierarchy: string;
      parent: {
        data: {
          id: number,
          attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            label: string;
            hierarchy: string;
          }
        }
      }
      children: {
        data: {
          id: number,
          attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            label: string;
            hierarchy: string;
          }
        }[]
      }
    }
  }
}
