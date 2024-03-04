"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "../../lib/graphqlClient";
import { PropsWithChildren } from "react";

const WithApollo = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApollo;
