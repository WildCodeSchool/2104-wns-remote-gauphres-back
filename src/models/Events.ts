import { getModelForClass, Prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { User } from './Users';

@ObjectType()
export class Event {
    @Prop()
    @Field()
    id?: string;

    @Prop()
    @Field()
    title?: string;

    @Prop()
    @Field()
    description?: string;

    @Prop()
    @Field()
    place?: string;

    @Prop()
    @Field()
    category?: string;

    @Prop({ type: User })
    @Field((type) => User)
    author?: User;

    @Prop({ type: User })
    @Field((type) => [User])
    attendee?: User[];

    @Prop()
    @Field()
    createdAt?: Date;

    @Prop()
    @Field()
    eventDate?: Date;
}

export const EventModel = getModelForClass(Event);
