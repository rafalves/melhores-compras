export type Article = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    meta_description: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    image_cover: ImageCover;
    keywords?: Keywords[];
    components?: Component[];
    category?: Category;
    author?: Author;
    content_ckeditor?: string;
  };
};

export type Author = {
  data: {
    attributes: {
      name: string;
      description: string;
    };
  };
};

export type Category = {
  data?: {
    id: number;
    attributes?: {
      categoryName: string;
    };
  };
};

export type Component = {
  id: number;
  __component: string;
  textConnection?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  alt?: string;
};

export type Keywords = {
  data?: {
    id: number;
    attibutes: {
      name: string;
    }[];
  };
};

export type ImageCover = {
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
};

export type Formats = {
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
};
