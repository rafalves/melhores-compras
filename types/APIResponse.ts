import { Article } from "~/types/Article";

export type APIResponse = {
  data: Article[];
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
