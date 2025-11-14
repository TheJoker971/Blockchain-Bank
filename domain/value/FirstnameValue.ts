import { FirstnameError } from "../error/FirstnameError";

export type Firstname = string;

export class FirstnameValue {

    private constructor(public readonly value: Firstname) {}
    
    public static create(firstname: string): FirstnameValue | FirstnameError {
        if (firstname.trim().length === 0) {
            return new FirstnameError('Firstname cannot be empty');
        }
        return new FirstnameValue(firstname);
    }

}