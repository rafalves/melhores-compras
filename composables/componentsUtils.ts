import { Formats, Media } from '~/types/components/Media';
import { TableRow } from '~/types/components/blocks/ProductRow';


export const useGetImageUrl = (obj: TableRow): string => {
  const api: string = useRuntimeConfig().public.apiImageBase
  const placeholderImage: string = "/img/placeholderProduct.png"

  if (obj?.imageUrl) {
    return `${api}${obj.imageUrl}`
  }

  if (obj.image?.data.attributes.url) {
    return `${api}${obj.image.data.attributes.url}`
  }

  if (obj.image?.data.attributes.formats) {
    const formats: {
      small?: Formats;
      medium?: Formats;
      large?: Formats;
      thumbnail?: Formats;
    } = obj.image?.data.attributes.formats;

    if ("large" in formats && formats.large?.url) {
      return `${api}${formats.large.url}`
    } else if ("medium" in formats && formats.medium?.url) {
      return `${api}${formats.medium.url}`
    } else if ("small" in formats && formats.small?.url) {
      return `${api}${formats.small.url}`
    } else if ("thumbnail" in formats && formats.thumbnail?.url) {
      return `${api}${formats.thumbnail.url}`
    }
  }
  return placeholderImage
}
