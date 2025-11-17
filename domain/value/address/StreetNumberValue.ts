import { StreetNumberError } from "../../error/address/StreetNumberError";

export type StreetNumber = string;

export class StreetNumberValue {

    private constructor(public readonly value: StreetNumber) {}

    public static create(streetNumber:string): StreetNumberValue | StreetNumberError {
        if(!/^[0-9A-Za-z]+(?:[-\/][0-9A-Za-z]+)*$/.test(streetNumber.trim())) {
            return new StreetNumberError("Invalid street number format !");
        }
        return new StreetNumberValue(streetNumber);

    }
}