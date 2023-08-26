import { Media } from "../Media"

export interface TableRow {
  id: number,
  order: string,
  title: string,
  rating: number,
  imageUrl: string,
  description: string,
  content: string,
  oEmbed: string,
  cons: Cons[],
  pros: Pros[],
  shopButton: ShopButton[],
  image: Media
}

export interface ShopButton {
  id: number,
  label: string,
  link: string,
  logoUrl: string,
  seller: string
}


export interface Cons {
  id: number,
  cons: string
}
export interface Pros {
  id: number,
  pros: string
}