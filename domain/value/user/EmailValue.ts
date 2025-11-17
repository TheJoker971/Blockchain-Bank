import { EmailError } from "../../error/user/EmailError";

export type Email = `${string}@${string}.${string}`;

export class EmailValue {

    private constructor(public readonly value: Email) {}

    public static create(email: string): EmailValue | EmailError {
        // Regex conforme RFC 5322 (simplifiée mais plus stricte)
        const emailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(email)) {
            return new EmailError('Invalid email format');
        }
        
        // Validation longueur totale
        if (email.length > 254 || email.length < 14) { // Minimum : 10 (local) + 1 (@) + 2 (domain) + 1 (.) + 2 (TLD) = 16
            return new EmailError('Email address length must be between 14 and 254 characters');
        }
        
        // Validation explicite : partie locale minimum 10 caractères
        const localPart = email.split('@')[0];
        if (localPart.length < 10) {
            return new EmailError('Invalid email format: local part must be at least 10 characters');
        }
        
        return new EmailValue(email as Email);
    }
}