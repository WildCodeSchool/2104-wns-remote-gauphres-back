import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateMoodInputForUser, User, UserInput, UserModel } from '../models/User';

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

    @Mutation(() => User)
        async updateUserMood(
        @Arg('newMood') newMood: CreateMoodInputForUser
    ) {
            const updatedUserMood = await UserModel.findOneAndUpdate(
                { _id: newMood.userId},
                { userMood: {title: newMood.title, image: newMood.image} }
            );
            
            return updatedUserMood;
    }

}
function filter(arg0: string, arg1: boolean) {
    throw new Error('Function not implemented.');
}

