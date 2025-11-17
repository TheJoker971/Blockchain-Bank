import { Email, EmailValue } from "../value/user/EmailValue";
import { Firstname, FirstnameValue } from "../value/user/FirstnameValue";
import { Lastname, LastnameValue } from "../value/user/LastnameValue";
import { Password, PasswordValue } from "../value/user/PasswordValue";
import { Phone, PhoneValue } from "../value/user/PhoneValue";
import { Role } from "../value/user/RoleValue";
import { UUID, UUIDValue } from "../value/UUIDValue";


export class UserEntity {

    private constructor(
        public readonly id: UUID,
        public readonly firstname: Firstname,
        public readonly lastname: Lastname,
        public readonly email: Email,
        public readonly phone: Phone,
        public readonly password: Password,
        public readonly advisorId: null | UUID = null,
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
        advisorId?: string,
        role?:Role,
        updatedAt?:Date,
        createdAt?:Date
    ) : UserEntity | Error {

        const idOrError : UUIDValue | Error = UUIDValue.create(id);
        const firstnameOrError : FirstnameValue | Error = FirstnameValue.create(firstname);
        const lastnameOrError : LastnameValue | Error = LastnameValue.create(lastname);
        const emailOrError : EmailValue | Error = EmailValue.create(email);
        const phoneOrError : PhoneValue | Error = PhoneValue.create(phone);
        const passwordOrError : PasswordValue | Error = PasswordValue.create(password);
        let advisorIdOrError: undefined | UUIDValue | Error = undefined;

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
        if(advisorId !== undefined) {
            advisorIdOrError = UUIDValue.create(advisorId);
            if(advisorIdOrError instanceof Error) {
                return advisorIdOrError
            }
        }

        return new UserEntity(idOrError.value,
            firstnameOrError.value,
            lastnameOrError.value,
            emailOrError.value,
            phoneOrError.value,
            passwordOrError.value,
            advisorIdOrError?.value,
            role,
            updatedAt,
            createdAt
        );

    }

}