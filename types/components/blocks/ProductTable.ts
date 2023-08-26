import { TableRow } from "./ProductRow";

export interface ProductTable {
  id: number,
  __component: string,
  order: number,
  tableRows: TableRow[],
}
