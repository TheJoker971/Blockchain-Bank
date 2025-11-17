import { IDError } from "../error/IDError";

export type ID = number;

export class IDValue {

    private constructor(public readonly value: ID){}

    public static create(id: number): IDValue | IDError {
        if(id <= 0) {
            return new IDError("Invalid ID format !");
        }
        return new IDValue(id);
    }

}