import { getModelForClass, Prop, Ref } from '@typegoose/typegoose';
import { Field, InputType, ObjectType } from 'type-graphql';
import { ChatRoom } from './ChatRoom';

@ObjectType()
export class User {
    @Prop()
    @Field()
    id!: string;

    @Prop()
    @Field()
    userName?: string;

    @Prop()
    @Field()
    firstname?: string;

    @Prop()
    @Field()
    lastname?: string;

    @Prop()
    @Field()
    password?: string;

    @Prop({ ref: 'ChatRoom' })
    @Field((type) => [ChatRoom])
    chatrooms?: Ref<ChatRoom>[];

    /* @Prop()
    @Field()
    hobbies?: Object[]; */

    @Prop()
    @Field({ nullable: true })
    avatar?: string;

    @Prop()
    @Field()
    isConnected?: boolean;

    @Prop({ unique: true })
    @Field()
    email?: string;

    @Prop()
    @Field()
    birthDate?: string;

    @Prop()
    @Field()
    creationDate?: Date;

    /* @Prop()
    @Field()
    mood?: Object; */
}

export const UserModel = getModelForClass(User);

@InputType()
export class CreateUserInput {
    @Field()
    userName!: string;

    @Field()
    firstname!: string;

    @Field()
    lastname!: string;

    @Field()
    password!: string;

    @Field()
    email!: string;

    @Field()
    birthDate!: string;

    @Field()
    creationDate: Date = new Date(Date.now());

    @Field()
    isConnected: boolean = false;
}
