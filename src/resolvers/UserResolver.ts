import { Query, Resolver } from 'type-graphql';
import { User, UserModel } from '../models/User';

@Resolver(User)
export class UserResolver {
    @Query((returns) => [User])
    async allUsers(): Promise<User[]> {
        const users = await UserModel.find();
        if (users) {
            console.log(users);
            console.log('we got users !');
            return users;
        } else {
            console.log('We do not...');
            return [];
        }
    }
}
