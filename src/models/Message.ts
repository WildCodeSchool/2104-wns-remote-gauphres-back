import { Field, ObjectType } from 'type-graphql';
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
