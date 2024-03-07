import { ApolloClient, InMemoryCache } from "@apollo/client";
import { supabaseUrl } from "./supabase";

export const client = new ApolloClient({
  uri: `${supabaseUrl}/graphql/v1`,
  cache: new InMemoryCache(),
});
