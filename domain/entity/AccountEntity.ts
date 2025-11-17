import { Balance } from "../value/BalanceValue";
import { UUID, UUIDValue } from "../value/UUIDValue";
import { WalletAddress, WalletAddressValue } from "../value/WalletAddressValue";

export class AccountEntity {

    private constructor(
        public readonly address:WalletAddress,
        public readonly balance:Balance = 0,
        public readonly userId:UUID,
        public readonly createdAt:Date=new Date(),
        public readonly updatedAt?:Date
    ){}

    public static create(
        address:string,
        userId:string,
        balance?:number,
        createdAt?:Date,
        updatedAt?:Date
    ) : AccountEntity | Error{
        
        const addressOrError: WalletAddressValue | Error = WalletAddressValue.create(address);
        const userIdOrError: UUIDValue | Error = UUIDValue.create(userId);
        
        if(addressOrError instanceof Error) {
            return addressOrError;
        }
        if(userIdOrError instanceof Error) {
            return userIdOrError;
        }

        return new AccountEntity(addressOrError.value,balance,userIdOrError.value,createdAt,updatedAt);
    }
}