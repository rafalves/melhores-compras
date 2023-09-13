import { Media } from "../Media";

export interface Seo {
  id?: number,
  __component?: string,
  metaTitle?: string,
  metaDescription?: string,
  keywords?: string,
  metaRobots?: string,
  structuredData?: any;
  metaViewport?: string,
  canonicalURL?: string,
  metaImage?: Media,
  metaSocial?: MetaSocial[];

}

export interface MetaSocial {
  id?: number,
  socialNetwork?: string,
  title?: string,
  description?: string,
  image?: Media
}