import { ICategory } from './i-category';

export interface IHeading {
  headingId: number;
  headingName: string;
  categories: ICategory[];
}