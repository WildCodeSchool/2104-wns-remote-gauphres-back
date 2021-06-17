import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User, UserInput, UserModel, UserWithToken } from '../models/User';
import { sign } from 'jsonwebtoken';

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

    @Mutation(() => UserWithToken)
    async createUser(@Arg('data') data: UserInput) {
        const user = await UserModel.create(data);
        await user.save();
        return {
            user,
            accessToken: sign( {userId: user.id}, 'secretJWT')
        };
    }

    @Mutation(() => UserWithToken)
    async Login(
        @Arg("email") email: string,
        @Arg("password") password: string
    ): Promise<UserWithToken> {

        const user = await UserModel.findOne({ email, password });

        if (!user) {
            throw new Error('Cet utilisateur est introuvable')
        }

        return {
            user,
            accessToken: sign( {userId: user.id}, 'secretJWT')
        };
    }
}
