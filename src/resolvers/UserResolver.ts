import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User, UserInput, UserModel, LoginResponse } from '../models/User';
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

    @Mutation(() => User)
    async createUser(@Arg('data') data: UserInput) {
        const newUser = await UserModel.create(data);
        await newUser.save();
        return newUser;
    }

    //test
    @Mutation(() => LoginResponse)
    async Login(
        @Arg("email") email: string,
        @Arg("password") password: string
    ): Promise<LoginResponse> {

        const user = await UserModel.findOne({where: { email: 'userEmail@email.com' }});

        if (!user) {
            throw new Error('Cet utilisateur est introuvable')
        }

        return {
            accessToken: sign( {userId: user.id}, 'secretJWT')
        };
    }
}
