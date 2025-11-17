import { PasswordError } from "../../error/user/PasswordError";

export type Password = `0x${string}`;

export class PasswordValue {

    private constructor(public readonly value: Password) {}

    public  static create(password: string): PasswordValue | PasswordError {
        if (!/^0x[a-fA-F0-9]{64}$/.test(password)) {
            return new PasswordError('Invalid password format');
        }
        return new PasswordValue( password as Password);
    }

}