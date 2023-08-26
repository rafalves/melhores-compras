import { AdBlock } from "./blocks/AdBlock";
import { Content } from "./blocks/Content";
import { ContentCKEditor } from "./blocks/ContentCKEditor";
import { NextArticle } from "./blocks/NextArticle";
import { Oembed } from "./blocks/Oembed";
import { PreviousArticle } from "./blocks/PreviousArticle";
import { ProductDetails } from "./blocks/ProductDetails";
import { TableRow } from "./blocks/ProductRow";
import { ProductTable } from "./blocks/ProductTable";
import { RelatedArticles } from "./blocks/RelatedArticles";
import { Seo } from "./blocks/Seo";

export type UnionComponent = AdBlock | Content | ContentCKEditor | NextArticle | Oembed | PreviousArticle | ProductDetails | TableRow | ProductTable | RelatedArticles | Seo