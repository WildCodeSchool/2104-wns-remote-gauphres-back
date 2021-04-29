import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import {
    ChatRoom,
    ChatRoomModel,
    CreateChatRoomInput,
} from '../models/ChatRoom';

@Resolver(ChatRoom)
export class ChatRoomResolver {
    @Query(() => [ChatRoom])
    async allChatRooms(): Promise<ChatRoom[]> {
        const chatrooms = await ChatRoomModel.find();
        return chatrooms;
    }

    @Mutation(() => ChatRoom)
    async createChatRoom(@Arg('data') data: CreateChatRoomInput) {
        const newChatRoom = await ChatRoomModel.create(data); // need help
        await newChatRoom.save();
        // need to add the user-random-setup
        return newChatRoom;
    }
}
