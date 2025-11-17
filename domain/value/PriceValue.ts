import { PriceError } from "../error/PriceError";

export type Price = number;

export class PriceValue {

    private constructor(public readonly value: Price) {}

    public static create(price:number): PriceValue | PriceError {
        if(price <= 0) {
            return new PriceError("Invalid price value only > 0 !");
        }
        return new PriceValue(price);
    }

}