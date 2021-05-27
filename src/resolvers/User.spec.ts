import "reflect-metadata";
import { gql } from "apollo-server-core";
import { ApolloServer } from "apollo-server";
import { MongoMemoryServer } from "mongodb-memory-server";
import { mongoose } from "@typegoose/typegoose";
const { createTestClient } = require('apollo-server-testing');
import { UserResolver } from "./UserResolver";
import { buildSchema } from "type-graphql";

const GET_USERS_CONNECTED = gql`
query getUsersConnected  {
    isConnected
  }
`;

describe(
    "test suite", 
     ()=>{
            
        it( "Test - Resolver for the Users Connected",
            async ()=>{
    
                const schema = await buildSchema({
                resolvers: [
                    UserResolver
                ],
                });

                const apollo = new ApolloServer({ schema, playground: true });
            

                const { query } = createTestClient(apollo);
                const res = await query({ query: GET_USERS_CONNECTED });
                expect(res.data).toBeDefined();
                console.log(res.data);
                //expect(res.data.innecte).toEqual(true);
            }
        );
    }
);


