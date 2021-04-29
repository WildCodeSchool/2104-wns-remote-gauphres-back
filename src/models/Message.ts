import { Prop } from '@typegoose/typegoose';
import { Field, InputType, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
export class Message {
    @Prop()
    @Field()
    id?: string;

    @Prop()
    @Field()
    text!: string;

    @Prop({ ref: 'User' })
    @Field((type) => User)
    author?: User;

    @Prop()
    @Field()
    creationDate?: Date;
}

@InputType()
export class CreateMessageInput {
    @Field()
    id?: string;

    @Field()
    text!: string;

    @Field()
    creationDate: Date = new Date(Date.now());
}
