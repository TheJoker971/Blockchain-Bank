import { PostalCodeError } from "../../error/address/PostalCodeError";

export type PostalCode = string;

export class PostalCodeValue {

    private constructor(public readonly value: PostalCode){}

    public static create(postalCode: string): PostalCodeValue | PostalCodeError {
        if(!/^\d{5}$/.test(postalCode.trim())){
            return new PostalCodeError("Invalid postal code format !");
        }
        return new PostalCodeValue(postalCode);
    }

}