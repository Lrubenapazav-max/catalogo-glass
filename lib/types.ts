export type Side = "izquierdo" | "derecho";

export interface Brand {
  id: string;
  name: string;
  abbr: string;
  models: string[];
}

export interface Product {
  id: string;
  brandId: string;
  brandName: string;
  model: string;
  side: Side;
  stock: number;
  price: number | null;
  image: string;
}

export interface StockInfo {
  text: string;
  variant: "ok" | "low" | "out";
}
