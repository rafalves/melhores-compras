export interface QA {
  id: number;
  __component: string;
  order: number;
  Faq: Faq[];
}

export interface Faq {
  id: number;
  order?: number;
  question?: string;
  answer?: string;
}