import { AddressLine, AddressLineValue } from "../value/address/AddressLineValue";
import { City, CityValue } from "../value/address/CityValue";
import { Country, CountryValue } from "../value/address/CountryValue";
import { PostalCode, PostalCodeValue } from "../value/address/PostalCodeValue";
import { StreetNumber, StreetNumberValue } from "../value/address/StreetNumberValue";
import { UUID, UUIDValue } from "../value/user/UUIDValue";

export class AddressEntity {

    private constructor(
        public readonly id: number,
        public readonly streetNumber: StreetNumber,
        public readonly addressLine: AddressLine,
        public readonly city: City,
        public readonly postalCode: PostalCode,
        public readonly country: Country,
        public readonly userId: UUID,
        public readonly updatedAt?: Date,
        public readonly createdAt: Date= new Date()
    ){}

    public static create(
        id:number,
        streetNumber:string,
        addressLine:string,
        city:string,
        postalCode:string,
        country:string,
        userId:string,
        updatedAt?:Date,
        createdAt?:Date
    ) {
        const streetNumberOrError : StreetNumberValue | Error = StreetNumberValue.create(streetNumber);
        const addressLineOrError : AddressLineValue | Error = AddressLineValue.create(addressLine);
        const cityOrError : CityValue | Error = CityValue.create(city);
        const postalCodeOrError : PostalCodeValue | Error = PostalCodeValue.create(postalCode);
        const countryOrError : CountryValue | Error = CountryValue.create(country);
        const userIdOrError : UUIDValue | Error = UUIDValue.create(userId);

        if(streetNumberOrError instanceof Error) {
            return streetNumberOrError;
        }
        if(addressLineOrError instanceof Error) {
            return addressLineOrError;
        }
        if(cityOrError instanceof Error) {
            return cityOrError;
        }
        if(postalCodeOrError instanceof Error) {
            return postalCodeOrError;
        }
        if(countryOrError instanceof Error) {
            return countryOrError;
        }
        if(userIdOrError instanceof Error) {
            return userIdOrError;
        }

        return new AddressEntity(
            id,
            streetNumberOrError.value,
            addressLineOrError.value,
            cityOrError.value,
            postalCodeOrError.value,
            countryOrError.value,
            userIdOrError.value,
            updatedAt,
            createdAt
        );
    }
}