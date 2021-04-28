import { getModelForClass, Prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
    @Prop()
    @Field((type) => String)
    userName?: string;
}

export const UserModel = getModelForClass(User);
