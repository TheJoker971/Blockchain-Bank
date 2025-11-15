import { CountryError } from "../../error/address/CountryError";

export type Country = string;

export class CountryValue {

    private constructor(public readonly value: Country){}

    public static create(country: string): CountryValue | CountryError {
        if(!/^[A-Za-z\u0080-\u024F]+(?:[ \-'][A-Za-z\u0080-\u024F]+)*$/.test(country.trim())){
            return new CountryError("Invalid country format");
        }
        return new CountryValue(country);
    }

}