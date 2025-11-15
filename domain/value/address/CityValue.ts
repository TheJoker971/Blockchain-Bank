import { CityError } from "../../error/address/CityError";

export type City = string;

export class CityValue {

    private constructor(public readonly value: City){}

    public static create(city: string): CityValue | CityError {
        if(!/^[a-zA-Z\u0080-\u024F]+(?:[ \-'][a-zA-Z\u0080-\u024F]+)*$/.test(city.trim())) {
            return new CityError("Invalid city format !");
        }
        return new CityValue(city);
    }
}