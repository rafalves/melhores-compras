import { AdBlock } from "./blocks/AdBlock";
import { Content } from "./blocks/Content";
import { ContentCKEditor } from "./blocks/ContentCKEditor";
import { Oembed } from "./blocks/Oembed";
import { ProductDetails } from "./blocks/ProductDetails";
import { TableRow } from "./blocks/ProductRow";
import { ProductTable } from "./blocks/ProductTable";
import { RelatedArticles } from "./blocks/RelatedArticles";
import { NextArticle } from "./blocks/NextArticle";
import { PreviousArticle } from "./blocks/PreviousArticle";
import { Seo } from "./blocks/Seo";
import { QA } from "./blocks/Faq";

export type ContentComponent = AdBlock | Content | ContentCKEditor | Oembed | ProductDetails | TableRow | ProductTable | RelatedArticles | QA

export type StructureComponent = NextArticle | PreviousArticle | Seo

export type UnionComponents = ContentComponent | StructureComponent  