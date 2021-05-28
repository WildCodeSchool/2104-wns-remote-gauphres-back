import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User, UserInput, UserModel } from '../models/User';

@Resolver(User)
export class UserResolver {
    @Query(() => [User])
    async getAllUsers(): Promise<User[]> {
        const users = await UserModel.find();
        return users;
    }

    @Query(() => User)
    async getUserByEmail(@Arg('email') email: string) {
        const user = await UserModel.findOne({
            email: email,
        });
        return user;
    }

    @Query(() => [User])
    async getUsersConnected(): Promise<User[]> {
        const users = await UserModel.find(
            { isConnected:true }
        );
        return users;
    }

    @Mutation(() => User)
    async createUser(@Arg('data') data: UserInput) {
        const newUser = await UserModel.create(data);
        await newUser.save();
        return newUser;
    }
}
function filter(arg0: string, arg1: boolean) {
    throw new Error('Function not implemented.');
}

