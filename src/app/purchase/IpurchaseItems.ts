import { IProduct } from "../product/Iproduct";

export interface IpurchaseItems{
    PurchaseId : number;
    PurchaseTitle: string;
    PurchaseDate : string;
    VendorName : string;
    Items : IProduct[]
}