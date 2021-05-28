import "reflect-metadata";
import { gql } from "apollo-server-core";
import { UserResolver } from "./UserResolver";
import { createTestClient } from "apollo-server-testing"
import { buildSchema } from "type-graphql";
import {ApolloServer} from "apollo-server"
import mongoose from "mongoose";
require('dotenv').config()

const GET_USERS_CONNECTED = gql` { 
    getUsersConnected {
    isConnected
    }
}
`;

describe(
    "test suite", 
     ()=>{
        var apollo:any;
         beforeAll(
             async ()=> {
                 const schema = await buildSchema({
                    resolvers: [
                        UserResolver
                    ],
                });
                
                const uri = `mongodb+srv://gauphreAdmin:${process.env.DB_PASSWORD}@moowdydb.afpoa.mongodb.net/moowdyDb?retryWrites=true&w=majority`;
                mongoose.connect(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });

                apollo = new ApolloServer({ schema, playground: true });
             }
                
         )
        it( "Test - Resolver for the Users Connected",
            async ()=>{

                const { query } = createTestClient(apollo);
                const res = await query({ query : GET_USERS_CONNECTED });
                const data = res.data.getUsersConnected;
                console.log(res.data.getUsersConnected);
                for(let i = 0; i < data.length; i++) {
                    expect(data[i].isConnected).toEqual(true);
                }
            }
        );
    }
);
