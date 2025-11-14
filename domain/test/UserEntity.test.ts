import { UserEntity } from "../entity/UserEntity";

describe("Create UserEntity UUID tests", () => {
    test("Revert UUIDError", () => {
        const user = UserEntity.create(
            "idUser",
            "Jean",
            "Dupont",
            "jeandupont@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Create UserEntity", () => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean",
            "Dupont",
            "jeandupont@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity){
            expect(user.id).toBe("d5bdd173-5e89-4e56-bfa4-046e102e8847");
        }
    });
}); 

describe("Create UserEntity Firstname tests",() => {
    test("Revert FirstnameError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "",
            "Dupont",
            "jeandupond@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Create Jean-Pierre",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean-Pierre",
            "Dupont",
            "jeandupond@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.firstname).toBe("Jean-Pierre");
        }
    });
    test("Create Xue Ye",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Xue Ye",
            "Dupont",
            "jeandupond@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.firstname).toBe("Xue Ye");
        }
    });
});

describe("Create UserEntity Lastname tests",() => {
    test("Revert LastnameError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean",
            "",
            "jeandupond@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Create Dupont",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean",
            "Dupont",
            "jeandupond@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.lastname).toBe("Dupont");
        }
    });
    test("Create La Fontaine",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean",
            "La Fontaine",
            "jeandupond@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.lastname).toBe("La Fontaine");
        }
    });
    test("Create Jean-Francois",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean",
            "",
            "jeandupont@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.lastname).toBe("Jean-Francois");
        }
    });
});

describe("Create UserEntity Email tests",() => {
    test("Revert EmailError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Revert EmailError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Revert EmailError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@examplefr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Revert EmailError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.r",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Revert EmailError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "j@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Create jeandupont@example.fr",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.fr",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.email).toBe("jeandupont@example.fr");
        }
    });
});

describe("Create UserEntity Phone tests",() => {
    test("Revert PhoneError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.fr",
            "+3300000 000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Revert PhoneError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.fr",
            "+33456",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Create +33123456789",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.fr",
            "+33123456789",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.phone).toBe("+33123456789");
        }
    });
    test("Create +12025551234",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.fr",
            "+12025551234",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.phone).toBe("+12025551234");
        }
    });
});

describe("Create UserEntity Password tests",() => {
    test("Revert PasswordError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Revert PasswordError",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        expect(user).toBeInstanceOf(Error);
    });
    test("Create 0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.password).toBe("0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        }
    });
});

describe("Create UserEntity Role tests",() => {
    test("Create UserEntity role=CLIENT",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        if(user instanceof UserEntity) {
            expect(user.role).toBe("CLIENT");
        } 
    });
    test("Create UserEntity role=ADVISOR",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "ADVISOR"
        );
        if(user instanceof UserEntity) {
            expect(user.role).toBe("ADVISOR");
        }
    });
    test("Create UserEntity role=DIRECTOR",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "DIRECTOR"
        );
        if(user instanceof UserEntity) {
            expect(user.role).toBe("DIRECTOR");
        }
    });
    test("Create UserEntity role=CLIENT",() => {
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            undefined,
        );
        if(user instanceof UserEntity) {
            expect(user.role).toBe("CLIENT");
        }
    });
});

describe("Create UserEntity UpdateAt tests",() => {
    test("Create Date now",() => {
        const date = new Date();
        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            undefined,
            date
        );
        if(user instanceof UserEntity) {
            expect(user.updatedAt).toBe(date);
        }
    });
    test("Create Date now + 2",() => {
        const date = new Date();        // aujourd’hui
        date.setDate(date.getDate() + 2);  // ajoute 2 jours

        const user = UserEntity.create(
            "d5bdd173-5e89-4e56-bfa4-046e102e8847",
            "Jean", 
            "Dupont",
            "jeandupont@example.",
            "+3300000000",
            "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            undefined,
            date
        );
        if(user instanceof UserEntity) {
            expect(user.updatedAt).toBe(date);
        }
    });
});
    
    
    
    