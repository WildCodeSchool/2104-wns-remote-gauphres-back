import { getModelForClass, Prop } from "@typegoose/typegoose";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Mood {
@Prop()
@Field()
id?: string

@Prop()
@Field()
title?: string

@Prop()
@Field()
image?: string
}

export const MoodModel = getModelForClass(Mood);

