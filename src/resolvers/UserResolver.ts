import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User, UserInput, UserModel } from '../models/User';

@Resolver(User)
export class UserResolver {
    @Query(() => [User])
    async allUsers(): Promise<User[]> {
        const users = await UserModel.find();
        return users;
    }

    @Query(() => User)
    async getOneUser(@Arg('email') email: string) {
        const user = await UserModel.findOne({
            email: email,
        });
        return user;
    }

    @Mutation(() => User)
    async createUser(@Arg('data') data: UserInput) {
        const newUser = await UserModel.create(data);
        await newUser.save();
        return newUser;
    }
}
