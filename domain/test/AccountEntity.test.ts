import { AccountEntity } from "../entity/AccountEntity";

describe("Create AccountEntity address tests", () => {
    test("Create 0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",() => {
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        )
        if(account instanceof AccountEntity) {
            expect(account.address).toBe("0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968");
        }
    });
    test("Invalid address 0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd",() => {
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        )
        expect(account).toBeInstanceOf(Error);
        
    });
});
describe("Create AccountEntity userId tests", () => {
    test("Create d5bdd173-5e89-4e56-bfa4-046e102e8847",() => {
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        )
        if(account instanceof AccountEntity) {
            expect(account.userId).toBe("d5bdd173-5e89-4e56-bfa4-046e102e8847");
        }
    });
    test("Invalid userId d5bdd173-5e89-4e56-bfa4-046e102e8",() => {
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8"
        )
        expect(account).toBeInstanceOf(Error);
    });
});
describe("Create AccountEntity balance tests",() => {
    test("Create balance = 0 ",() => {
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        )
        if(account instanceof AccountEntity) {
            expect(account.balance).toBe(0);
        }
    });
    test("Create balance = 1500",() => {
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            1500
        )
        if(account instanceof AccountEntity) {
            expect(account.balance).toBe(1500);
        }
    });
});
describe("Create AccountEntity createdAt tests",() => {
    test("Create createdAt = new Date() ",() => {
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        )
        if(account instanceof AccountEntity) {
            expect(account.createdAt).toStrictEqual(new Date());
        }
    });
    test("Create createdAt = new Date() - 2",() => {
        const date = new Date();
        date.setDate(date.getDate() - 2);
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            undefined,
            date
        )
        if(account instanceof AccountEntity) {
            expect(account.createdAt).toBe(date);
        }
    });
});

describe("Create AccountEntity updatedAt tests",() => {
    test("Create updatedAt = new Date() ",() => {
        const date = new Date();
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            undefined,
            undefined,
            date
        )
        if(account instanceof AccountEntity) {
            expect(account.updatedAt).toBe(date);
        }
    });
    test("Create updatedAt = new Date() + 2",() => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        const account = AccountEntity.create(
            "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            undefined,
            undefined,
            date
        )
        if(account instanceof AccountEntity) {
            expect(account.updatedAt).toBe(date);
        }
    });
});