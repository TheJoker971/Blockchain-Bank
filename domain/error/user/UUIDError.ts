export class UUIDError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UUIDError';
    }
}