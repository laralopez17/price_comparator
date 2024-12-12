import { IPriceCompared } from "./i-price-compared";

export interface IProductCompared {
    barcode: string;
    productName: string;
    image: string | null;
    brandName: string;
    prices: IPriceCompared[];
}
