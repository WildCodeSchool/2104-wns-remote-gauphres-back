import { Field, InputType, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
export class Message {
    @Field()
    text!: string;

    @Field((type) => User)
    author!: User;

    @Field()
    creationDate!: Date;
}

@InputType()
export class CreateMessageInput {
    @Field()
    text!: string;

    @Field()
    creationDate: Date = new Date(Date.now());
}
