import { readFileSync } from "fs";
import { join } from "path";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { Resolvers } from "../../lib/__generated__/server/resolvers-types";

const typeDefs = readFileSync(
  join(process.cwd(), "src/lib/documents/schema.gql"),
  "utf-8"
);

const resolvers: Resolvers = {
  Query: {},
};

const apolloServer = new ApolloServer<Resolvers>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);
