export class LastnameError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'LastnameError';
    }
}