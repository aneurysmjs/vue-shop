export interface IProduct {
  name: string,
}

export interface IProductsState {
  product: IProduct,
  products: Array<IProduct>,
}