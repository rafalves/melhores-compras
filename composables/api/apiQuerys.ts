export const getAllLatestPosts: string = "?sort[0]=publishedAt%3Adesc&populate[0]=category&populate[1]=category.parent&populate[2]=category.children&populate[3]=imgBanner&pagination[start]=0&pagination[limit]=20"

export const getCategoryHierarchy: string = "?populate[category]=true"

export const getPostBySlug: string = "?populate[imgBanner]=true&populate[category][populate][0]=parent&populate[category][populate][1]=children&populate[authors][fields][0]=name&populate[components][on][adsense.ad-block]=true&populate[components][on][blocks.content]=true&populate[components][on][blocks.product-detais]=true&populate[components][on][blocks.oembed]=true&populate[components][on][blocks.content-ck-editor]=true&populate[components][on][blocks.related-articles][populate][0]=articles&populate[components][on][blocks.product-table][populate][0]=tableRows&populate[components][on][blocks.product-table][populate][1]=tableRows.image&populate[components][on][blocks.product-table][populate][2]=tableRows.ShopButton&populate[components][on][blocks.product-table][populate][3]=tableRows.pros&populate[components][on][blocks.product-table][populate][4]=tableRows.cons&populate[components][on][blocks.row-table][populate][0]=image&populate[components][on][blocks.row-table][populate][1]=ShopButton&populate[components][on][blocks.row-table][populate][2]=pros&populate[components][on][blocks.row-table][populate][3]=cons&populate[components][on][shared.seo][populate][0]=structuredData&populate[components][on][shared.seo][populate][1]=metaImage&populate[components][on][shared.seo][populate][2]=metaSocial&populate[components][on][shared.seo][populate][3]=metaSocial.image"