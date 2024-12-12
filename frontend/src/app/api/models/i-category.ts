import { IProductType } from './i-product-type';

export interface ICategory {
  categoryId: number;
  categoryName: string;
  productTypes: IProductType[];
}