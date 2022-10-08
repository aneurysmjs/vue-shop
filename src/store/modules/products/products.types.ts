export interface IProduct {
  id: string;
  name: string;
  img: string;
  imgHovered: string;
}

export interface IProductsState {
  product: IProduct;
  products: Array<IProduct>;
}
