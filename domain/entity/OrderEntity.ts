import { Amount, AmountValue } from "../value/AmountValue";
import { ID, IDValue } from "../value/IDValue";
import { Price, PriceValue } from "../value/PriceValue";
import { WalletAddress, WalletAddressValue } from "../value/WalletAddressValue";

export class OrderEntity {

    private constructor(
        public readonly id: ID,
        public readonly accountAddress: WalletAddress,
        public readonly amount: Amount,
        public readonly price:Price,
        public readonly isBuy:boolean,
        public readonly isClosed:boolean = false,
        public readonly createdAt:Date = new Date(),
        public readonly updatedAt?: Date
    ){}

    public static create(
        id:number,
        accountAddress:string,
        amount: number,
        price: number,
        isBuy:boolean,
        isClosed?:boolean,
        createdAt?:Date,
        updatedAt?:Date
    ): OrderEntity | Error {

        const idOrError: IDValue | Error = IDValue.create(id);
        const accountAddressOrError: WalletAddressValue | Error = WalletAddressValue.create(accountAddress);
        const amountOrError: AmountValue | Error = AmountValue.create(amount);
        const priceOrError: PriceValue | Error = PriceValue.create(price);

        if(idOrError instanceof Error) {
            return idOrError;
        }
        if(accountAddressOrError instanceof Error) {
            return accountAddressOrError;
        }
        if(amountOrError instanceof Error) {
            return amountOrError;
        }
        if(priceOrError instanceof Error) {
            return priceOrError;
        }
        return new OrderEntity(
            idOrError.value,
            accountAddressOrError.value,
            amountOrError.value,
            priceOrError.value,
            isBuy,
            isClosed,
            createdAt,
            updatedAt
        );
    }

}