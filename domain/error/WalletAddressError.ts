export class WalletAddressError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "WalletAddressError";
    }
}