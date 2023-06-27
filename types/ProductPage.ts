import { Article } from "./Article";

export interface Product {
  data?: {
    id?: number;
    attributes?: {
      createdAt?: string;
      updatedAt?: string;
      name?: string;
      rating?: number;
      imageUrl?: string;
      description_blog?: string;
      description_ckeditor?: string;
      images?: ImageData;
      pros?: Pro[];
      seller?: Seller[];
      articles?: Article[];
      shopButton?: ShopButton[];
      product_category?: {
        data?: [];
      };
    };
  };
}

export interface ShopButton {
  id?: number;
  label?: string;
  link?: string;
}

export interface Seller {
  id?: number;
  seller_name?: string;
  prod_link?: string;
}

export interface Pro {
  id?: number;
  pros?: string;
}

export interface Image {
  id?: number;
  attributes?: {
    name?: string;
    alternativeText?: string;
    caption?: string;
    url?: string;
    formats?: {
      thumbnail?: {
        url?: string;
      };
    };
  };
}

export interface ImageData {
  data: Image[];
}
