export interface Product {
  id: string;
  name: string;
  img: string;
  imgHovered: string;
  price: number;
  description: string;
  shop: string;
}

export interface ProductResponse {
  data: Product;
}

export interface ProductsState {
  product: Product;
  products: Array<Product>;
}
