import { Media } from "../Media";

export interface Seo {
  id: number,
  __component: string,
  metaDescription: string,
  keywords: string,
  metaRobots: string,
  order: number
  structuredData: any;
  metaViewport: string,
  canonicalURL: string,
  image: string,
  metaImage: Media,
  metaSocial: MetaSocial[];

}

export interface MetaSocial {
  id: number,
  socialNetwork: string,
  description: string,
  image: Media
}