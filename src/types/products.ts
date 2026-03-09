export interface Product {
  _id: string;
  name: string;
  tipo: string;
  cantidad: number;
}

export interface ProductExtra {
  _id: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
}

export interface ProductClient {
  _id: string;
  name: string;
  productos: Product[];
  price: number;
  state: boolean;
  __v?: number;
}

export interface ProductExtraClient {
  _id: string;
  name: string;
  description?: string;
  productosExtras: ProductExtra[];
  __v?: number;
}