import { getModelForClass, Prop, Ref } from '@typegoose/typegoose';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Message } from './Message';
import { User } from './User';

@ObjectType()
export class ChatRoom {
    @Prop()
    @Field()
    id!: string;

    @Prop({ ref: 'User' })
    @Field((type) => [User])
    users!: Ref<User>[];

    @Prop({ type: Message })
    @Field((type) => [Message])
    messages!: Message[];

    @Prop()
    @Field()
    creationDate!: Date;

    @Prop()
    @Field()
    isActiv!: Boolean;

    @Prop()
    @Field()
    title!: string;
}
export const ChatRoomModel = getModelForClass(ChatRoom);

@InputType()
export class CreateChatRoomInput {
    @Field()
    creationDate: Date = new Date(Date.now());

    @Field()
    isActiv: boolean = true;

    @Field()
    title!: string;
}
