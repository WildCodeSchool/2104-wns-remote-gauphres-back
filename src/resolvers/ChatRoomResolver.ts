import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import {
    ChatRoom,
    ChatRoomModel,
    CreateChatRoomInput,
} from '../models/ChatRoom';
import { CreateMessageInput, Message } from '../models/Message';

@Resolver(ChatRoom)
export class ChatRoomResolver {
    @Query(() => [ChatRoom])
    async allChatRooms(): Promise<ChatRoom[]> {
        const chatrooms = await ChatRoomModel.find();
        return chatrooms;
    }

    @Mutation(() => ChatRoom)
    async createChatRoom(
        @Arg('data') data: CreateChatRoomInput
    ): Promise<ChatRoom> {
        const newChatRoom = await ChatRoomModel.create(data);
        await newChatRoom.save();
        // need to add the user-random-setup
        return newChatRoom;
    }

    @Mutation(() => ChatRoom)
    async sendMessage(
        @Arg('_id') _id: string,
        @Arg('newMessage', () => CreateMessageInput) message: Message
    ) {
        const temp = await ChatRoomModel.findByIdAndUpdate(
            { _id: _id },
            {
                $push: {
                    messages: message,
                },
            }
        );
        return temp;
    }
}
