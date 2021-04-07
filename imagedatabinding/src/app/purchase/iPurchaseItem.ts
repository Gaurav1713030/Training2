import {Product} from "../product/iProduct";
export interface iPurchaseItem {
    Id : number,
    Name : string,
    PurchaseDate :string;
    VenderName : string;
    Items :Product[]
}