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
    username?: string;

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
    createdAt?: Date;

    @Prop()
    @Field()
    accessToken?: string;

    /* @Prop()
    @Field()
    mood?: Object; */
}

export const UserModel = getModelForClass(User);

@InputType()
export class UserInput {
    @Field()
    username?: string;

    @Field()
    firstname?: string;

    @Field()
    lastname?: string;

    @Field()
    password?: string;

    @Field()
    email?: string;

    @Field({ nullable: true })
    avatar?: string;

    @Field()
    birthDate?: string;

    @Field()
    createdAt?: Date = new Date(Date.now());

    @Field()
    isConnected?: boolean = false;
}

@InputType()
export class UserChatRoom {
    @Field()
    username?: string;

    @Field({ nullable: true })
    avatar?: string;

    @Field()
    isConnected?: boolean = false;
}

@InputType()
export class MessageSender {
    @Field()
    id!: string;

    @Field()
    username!: string;
}

@InputType()
export class ArticleCreator {
    @Field()
    username!: string;
}

@ObjectType()
export class UserWithToken {
    @Field()
    accessToken!: string;
    @Field()
    user!: User;
}

@InputType()
export class LoginInput {
    @Field()
    email!: string;
    @Field()
    password!: string;
}
