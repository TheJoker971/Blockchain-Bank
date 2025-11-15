import { PhoneError } from "../../error/user/PhoneError";

export type Phone = `+${string}`;

export class PhoneValue {

    private constructor(public readonly value: Phone) {}
    
    public static create(phone: string): PhoneValue | PhoneError {
        // Format E.164 : + suivi de 1 à 15 chiffres
        const phoneRegex = /^\+\d{1,15}$/;
        
        if (!phoneRegex.test(phone)) {
            return new PhoneError('Invalid phone format. Expected format: +[country code][number] (E.164)');
        }
        
        // Validation : numéro complet (au moins 8 chiffres après le +)
        // Format minimum : +[1-3 chiffres pays][7-12 chiffres numéro]
        // Exemples valides : +33123456789 (10 chiffres), +33612345678 (10 chiffres)
        // Exemples invalides : +33456 (trop court), +33 (trop court)
        if (phone.length < 9) { // + et au moins 8 chiffres
            return new PhoneError('Phone number is too short. Minimum 8 digits required after country code');
        }
        
        return new PhoneValue(phone as Phone);
    }
}