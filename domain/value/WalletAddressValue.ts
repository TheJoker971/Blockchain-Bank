import {isAddress} from "ethers";
import { WalletAddressError } from "../error/WalletAddressError";

export type WalletAddress = `0x${string}`;

export class WalletAddressValue {

    private constructor(public readonly value:WalletAddress){}

    public static create(walletAddress:string): WalletAddressValue | WalletAddressError {
        if(!isAddress(walletAddress)) {
            return new WalletAddressError("Invalid wallet address format !");
        }
        return new WalletAddressValue(walletAddress as WalletAddress);
    }
}