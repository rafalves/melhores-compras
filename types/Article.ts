import { AuthorData } from "./Author";

export interface ArticlesData {
  data?: Article[];
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ArticleData {
  data?: Article;
}

export interface Article {
  id?: number;
  attributes?: {
    title?: string;
    slug?: string;
    meta_description?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    image_cover?: ImageCover;
    keywords?: Keywords[];
    components?: Component[];
    category?: Category;
    author?: AuthorData;
    content_ckeditor?: string;
    minsToRead?: number;
    products?: ProductData;
  };
}

interface ProductData {
  data: Product[];
}

export type Product = {
  id?: number;
  attributes?: {
    name?: string;
    rating?: number;
    imageUrl?: string;
    description_blog?: string;
    description_ckeditor: string;
  };
};

export interface Category {
  data?: {
    id: number;
    attributes?: {
      categoryName: string;
    };
  };
}

export interface Component {
  id: number;
  __component: string;
  textConnection?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  alt?: string;
}

export interface Keywords {
  data?: {
    id: number;
    attibutes: {
      name: string;
    }[];
  };
}

export interface ImageCover {
  data?: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: Formats;
      ext: string;
      size: number;
      url: string;
    };
  };
}

export interface Formats {
  small?: {
    url: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
  };
  thumbnail?: {
    url: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
  };
}
