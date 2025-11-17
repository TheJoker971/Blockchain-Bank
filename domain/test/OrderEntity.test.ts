import { OrderEntity } from "../entity/OrderEntity";

describe("Create OrderEntity id tests",() => {
    test("Create id = 1",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.id).toBe(1);
        }
    });
    test("Create id = 0",() => {
        const order = OrderEntity.create(
            0,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        expect(order).toBeInstanceOf(Error);
    });
});
describe("Create OrderEntity address account test",() => {
    test("Create account address = 0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.accountAddress).toBe("0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968");
        }
    });
    test("Invalid account address = 0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd",
            2,
            0.001,
            true,
        );
        expect(order).toBeInstanceOf(Error);
    });
});
describe("Create OrderEntity amount tests",() => {
    test("Create amount > 0",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.amount).toBe(2);
        }
    });
    test("Create amount = 0",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            0,
            0.001,
            true,
        );
        expect(order).toBeInstanceOf(Error);
    });
    test("Create amount < 0",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            -12,
            0.001,
            true,
        );
        expect(order).toBeInstanceOf(Error);
    });
});
describe("Create OrderEntity price tests",() => {
    test("Create price > 0",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.price).toBe(0.001);
        }
    });
    test("Create price = 0",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0,
            true,
        );
        expect(order).toBeInstanceOf(Error);
    });
    test("Create price < 0",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            -12,
            true,
        );
        expect(order).toBeInstanceOf(Error);
    });
});
describe("Create OrderEntity isBuy tests",() => {
    test("Create isBuy = true",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.isBuy).toBe(true);
        }
    });
    test("Create isBuy = false",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            false,
        );
        if(order instanceof OrderEntity){
            expect(order.isBuy).toBe(false);
        }
    });
});
describe("Create OrderEntity isClosed tests", () => {
    test("Create isClosed = false",()=> {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.isClosed).toBe(false);
        }
    });
    test("Create isClosed = true",() => {
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
            true
        );
        if(order instanceof OrderEntity){
            expect(order.isClosed).toBe(true);
        }
    });
});
describe("Create createdAt tests",() => {
    test("Create createdAt = new Date()",() => {
        const date = new Date();
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.createdAt).toStrictEqual(date);
        }
    });
    test("Create createdAt = new Date() - 2",() => {
        const date = new Date();
        date.setDate(date.getDate() - 2)
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
            undefined,
            date
        );
        if(order instanceof OrderEntity){
            expect(order.createdAt).toStrictEqual(date);
        }
    });
});
describe("Create updatedAt tests",() => {
    test("Create updatedAt = new Date()",() => {
        const date = new Date();
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
        );
        if(order instanceof OrderEntity){
            expect(order.updatedAt).toStrictEqual(undefined);
        }
    });
    test("Create updatedAt = new Date() + 2",() => {
        const date = new Date();
        date.setDate(date.getDate() + 2)
        const order = OrderEntity.create(
            1,
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            2,
            0.001,
            true,
            undefined,
            undefined,
            date
        );
        if(order instanceof OrderEntity){
            expect(order.updatedAt).toStrictEqual(date);
        }
    });
});