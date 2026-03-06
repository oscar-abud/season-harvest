export interface Product {
  _id: string;
  name: string;
  tipo: string;
  cantidad: number;
}

export interface ProductClient {
  _id: string;
  name: string;
  productos: Product[];
  price: number;
  state: boolean;
  __v?: number;
}