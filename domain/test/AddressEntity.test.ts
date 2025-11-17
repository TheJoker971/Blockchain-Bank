import { AddressEntity } from "../entity/AddressEntity";

describe("Create AddressEntity ID tests",() => {
    test("Invalid ID with negative number",() => {
        const address = AddressEntity.create(
            -10,
            "74B",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid ID with ID=0",() => {
        const address = AddressEntity.create(
            0,
            "74B",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Valid ID",() => {
        const address = AddressEntity.create(
            1,
            "74B",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity){
            expect(address.id).toBe(1);
        }
    });
});
describe("Create AddressEntity street number tests",() => {
    test("Invalid street number -123",() => {
        const address = AddressEntity.create(
            1,
            "-123",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid street number 123!",() => {
        const address = AddressEntity.create(
            1,
            "123!",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Valid street number 1",() => {
        const address = AddressEntity.create(
            1,
            "1",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.streetNumber).toBe("1");
        }
    });
    test("Valid street number 5A",() => {
        const address = AddressEntity.create(
            1,
            "5A",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.streetNumber).toBe("5A");
        }
    });
    test("Valid street number 62 Bis",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.streetNumber).toBe("62 Bis");
        }
    });
});
describe("Create AddressEntity address line tests",() => {
    test("Invalid address line Main St. #",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Main St. #",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Valid address line Rue du General de Gaulle",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.addressLine).toBe("Rue du General de Gaulle");
        }
    });
});
describe("Create AddressEntity city tests",() => {
    test("Valid city Paris",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "Paris",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.addressLine).toBe("Paris");
        }
    });
    test("Valid city San Francisco",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.addressLine).toBe("San Francisco");
        }
    });
    test("Invalid city Paris123",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "Paris123",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid city !London",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "!London",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid city New@York",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "New@York",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid city Berlin--Mitte",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "Berlin--Mitte",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid city San Francisco!",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco!",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
});
describe("Create AddressEntity postal code tests",() => {
    test("Valid postal code 75000",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.postalCode).toBe("75000");
        }
    });
    test("Invalid postal code 7500",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "7500",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid postal code 7500A",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "7500A",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
});
describe("Create AddressEntity country tests",() => {
    test("Valid country France",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.country).toBe("France");
        }
    });
    test("Valid country Cote d'Ivoire",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "Cote d'Ivoire",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.country).toBe("Cote d'Ivoire");
        }
    });
    test("Invalid country France1",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France1",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid country 123",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "123",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
    test("Invalid country @France",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "@France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        expect(address).toBeInstanceOf(Error);
    });
});
describe("Create AddressEntity userId tests",() => {
    test("Valid userId d5bdd173-5e89-4e56-bfa4-046e102e8847",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847"
        );
        if(address instanceof AddressEntity) {
            expect(address.userId).toBe("d5bdd173-5e89-4e56-bfa4-046e102e8847");
        }
    });
    test("Valid userId d5bdd173-5e89-4e56-bfa4-046e102e88",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e88"
        );
        expect(address).toBeInstanceOf(Error);
    });
});
describe("Create AddressEntity updatedAt tests", ()=> {
    test("Valid updatedAt",() => {
        const date = new Date()
        date.setDate(date.getDate() + 2);
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            date
        );
        if(address instanceof AddressEntity) {
            expect(address.updatedAt).toBe(date);
        }
    });
    test("Valid updatedAt",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
        );
        if(address instanceof AddressEntity) {
            expect(address.updatedAt).toBe(undefined);
        }
    });
});
describe("Create AddressEntity createdAt tests", () => {
    test("Valid createdAt without update",() => {
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
        );
        if(address instanceof AddressEntity) {
            expect(address.createdAt).toBe(new Date());
        }
    });
    test("Valid createdAt with update and createdAt",() => {
        const createdAt = new Date();
        createdAt.setDate(createdAt.getDate() - 4);
        const updatedAt = new Date();
        const address = AddressEntity.create(
            1,
            "62 Bis",
            "Rue du General de Gaulle",
            "San Francisco",
            "75000",
            "France",
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            updatedAt,
            createdAt
        );
        if(address instanceof AddressEntity) {
            expect(address.updatedAt).toBe(updatedAt);
            expect(address.createdAt).toBe(createdAt);
        }
    });
});