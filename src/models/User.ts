import { getModelForClass, Prop, Ref } from '@typegoose/typegoose';
import { type } from 'node:os';
import { Field, InputType, ObjectType } from 'type-graphql';
import { ChatRoom } from './ChatRoom';
import { Mood } from './Mood';
import { Hobby } from './Hobby';

@ObjectType()
export class User {
    @Prop()
    @Field()
    _id?: string;

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

    @Prop({ ref: 'Hobby' })
    @Field(() => [Hobby])
    hobbies?: Hobby[];

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

    @Prop({ type: Mood })
    @Field((type) => Mood)
    userMood?: Mood;
}

export const UserModel = getModelForClass(User);

@InputType()
export class UserInput {
    @Field()
    userName?: string;

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
    userName?: string;

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
    userName!: string;
}

@InputType()
export class ArticleCreator {
    @Field()
    username!: string;
}

@InputType()
export class CreateMoodInputForUser {
    @Field()
    userId!: string;

    @Field()
    title!: string;

    @Field()
    image!: string;
}
