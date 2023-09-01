export interface Oembed {
  id: number,
  __component: string,
  order: number,
  oEmbed?: string,
}

export interface OembedParsed {
  url: string,
  title: string,
  thumbnail: string,
  mime: string,
  rawData: {
    type: string,
    thumbnail_url: string,
    thumbnail_width: number,
    html: string,
    width: number,
    author_url: string,
    provider_name: string,
    thumbnail_height: number,
    height: number,
    author_name: string,
    provider_url: string,
    title: string,
  }
}