import { AmountError } from "../error/AmountError";

export type Amount = number;

export class AmountValue {

    private constructor(public readonly value: Amount) {}

    public static create(amount: number): AmountValue | AmountError {
        if(amount <= 0) {
            return new AmountError("Invalid amount value only > 0");
        }
        return new AmountValue(amount);
    }

}