import { ArticleData } from '~/types/ArticlePage';
import { Formats, Media } from '~/types/components/Media';
import { TableRow } from '~/types/components/blocks/ProductRow';
import { getCategoryHierarchy } from './api/apiQuerys';


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

export const fetchCategoryHierarchy = async (url: string, optContentType?: string) => {
  const contentType = optContentType ?? `articles/find-by-slug/`
  const config = useRuntimeConfig()

  const { data, error } = await useLazyFetch<ArticleData>(`${config.public.apiBase}${contentType}${url}${getCategoryHierarchy}`)

  if (!error) {
    return data.value?.data.attributes.category?.data?.attributes.hierarchy ?? "diversos"
  }
}