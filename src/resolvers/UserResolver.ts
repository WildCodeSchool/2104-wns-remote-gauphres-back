import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateUserInput, User, UserModel } from '../models/User';

@Resolver(User)
export class UserResolver {
    @Query(() => [User])
    async allUsers(): Promise<User[]> {
        const users = await UserModel.find();
        return users;
    }

    @Mutation(() => User)
    async createUser(@Arg('data') data: CreateUserInput) {
        const newUser = await UserModel.create(data);
        await newUser.save();
        return newUser;
    }
}
