import { IProductCompared } from "./i-product-compared";
import { ITotalCompared } from "./i-total-compared";

export interface IFinalCompared {
    products: IProductCompared[];
    totals: ITotalCompared[];
}
