import { LastnameError } from "../error/LastnameError";

export type Lastname = string;

export class LastnameValue {
    
    private constructor(public readonly value: Lastname) {}
    
    public static create(lastname: string): LastnameValue | LastnameError {
        if (lastname.trim().length === 0) {
            return new LastnameError('Lastname cannot be empty');
        }
        return new LastnameValue(lastname);
    }

}