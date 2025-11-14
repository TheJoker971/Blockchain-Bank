import { Email, EmailValue } from "../value/EmailValue";
import { Firstname, FirstnameValue } from "../value/FirstnameValue";
import { Lastname, LastnameValue } from "../value/LastnameValue";
import { Password, PasswordValue } from "../value/PasswordValue";
import { Phone, PhoneValue } from "../value/PhoneValue";
import { Role } from "../value/RoleValue";
import { UUID, UUIDValue } from "../value/UUIDValue";

export class UserEntity {

    private constructor(
        public readonly id: UUID,
        public readonly firstname: Firstname,
        public readonly lastname: Lastname,
        public readonly email: Email,
        public readonly phone: Phone,
        public readonly password: Password,
        public readonly role: Role = "CLIENT",
        public readonly updatedAt?: Date,
        public readonly createdAt: Date = new Date()
    ) {}

    public static create(
        id:string,
        firstname:string,
        lastname:string,
        email:string,
        phone:string,
        password:string,
        role?:Role,
        updatedAt?:Date
    ) : UserEntity | Error {

        const idOrError : UUIDValue | Error = UUIDValue.create(id);
        const firstnameOrError : FirstnameValue | Error = FirstnameValue.create(firstname);
        const lastnameOrError : LastnameValue | Error = LastnameValue.create(lastname);
        const emailOrError : EmailValue | Error = EmailValue.create(email);
        const phoneOrError : PhoneValue | Error = PhoneValue.create(phone);
        const passwordOrError : PasswordValue | Error = PasswordValue.create(password);

        if (idOrError instanceof Error) {
            return idOrError;
        }
        if (firstnameOrError instanceof Error) {
            return firstnameOrError;
        }
        if (lastnameOrError instanceof Error) {
            return lastnameOrError;
        }
        if (emailOrError instanceof Error) {
            return emailOrError;
        }
        if (phoneOrError instanceof Error) {
            return phoneOrError;
        }
        if (passwordOrError instanceof Error) {
            return passwordOrError;
        }

        return new UserEntity(idOrError.value,
            firstnameOrError.value,
            lastnameOrError.value,
            emailOrError.value,
            phoneOrError.value,
            passwordOrError.value,
            role,
            updatedAt
        );

    }

}