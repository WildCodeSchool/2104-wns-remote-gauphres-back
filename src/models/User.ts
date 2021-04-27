import { type } from "node:os";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(type => String)
    userName: string;

    constructor(userName: string) {
        this.userName = userName;
    }
}