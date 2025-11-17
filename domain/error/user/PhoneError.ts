export class PhoneError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PhoneError';
    }
}