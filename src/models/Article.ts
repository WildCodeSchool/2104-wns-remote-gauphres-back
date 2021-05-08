import { Prop } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Article {
    @Prop()
    @Field()
    id?: string;

    @Prop()
    @Field()
    title?: string;

    @Prop()
    @Field()
    description?: string;

    @Prop({ type: User})
    @Field((type) => User)
    author?: User;

    @Prop()
    @Field()
    createdAt?: Date;

    @Prop()
    @Field()
    url?: string;

}