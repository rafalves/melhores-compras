import { Media } from "./components/Media";

export interface OfferData {
  data: Offer[];
  meta: {
    pagination: {
      start: number;
      limit: number;
      total: number;
    };
  };
}

export interface Offer {
  id: number;
  attributes: {
    name: string;
    price: number;
    old_price?: number;
    discount?: number;
    payment_method?: string;
    seller: string;
    category?: string;
    headline?: string;
    likes?: number;
    tags?: string;
    offer_source?: string;
    createdAt: string;
    updatedAt?: string;
    publishedAd?: string;
    prod_link: string;
    image: Media;
  }
}