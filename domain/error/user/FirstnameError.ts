export class FirstnameError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FirstnameError';
    }
}