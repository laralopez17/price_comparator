export interface IPriceCompared {
    superId: number;
    branchId: number;
    price: number;
    branchName: string;
    superName: string;
    cheapest: boolean;
    productStatus: boolean | null;    
}
