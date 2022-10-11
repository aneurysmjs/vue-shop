export interface Product {
  id: string;
  name: string;
  img: string;
  imgHovered: string;
}

export interface ProductsState {
  product: Product;
  products: Array<Product>;
}
