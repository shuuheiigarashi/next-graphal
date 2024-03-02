import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "lib/documents/**/*.gql",
  documents: ["lib/documents/**/*.gql"],
  generates: {
    "./lib/__generated__/client/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./lib/__generated__/server/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
