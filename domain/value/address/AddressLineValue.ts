import { AddressLineError } from "../../error/address/AddressLineError";

export type AddressLine = string;

export class AddressLineValue {

    private constructor(public readonly value: AddressLine) {}

    public static create(addressLine: string): AddressLineValue | AddressLineError {
        if(!/^[A-Za-z0-9\s\.,'#/-]{1,100}$/.test(addressLine.trim())){
            return new AddressLineError("Invalid address line format");
        }
        return new AddressLineValue(addressLine);
    }
}