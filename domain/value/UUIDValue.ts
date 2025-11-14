import {validate} from "uuid";
import { UUIDError } from "../error/UUIDError";

export type UUID = string;

export class UUIDValue {

    private constructor(public readonly value: UUID) {}

    public static create(uuid:string) : UUIDValue | UUIDError {
        if(validate(uuid)) {
            return new UUIDValue(uuid as UUID);
        }
        return new UUIDError("Uuid invalid format !");
        
    }
}