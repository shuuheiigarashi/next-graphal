import { supabaseKey, supabaseUrl } from "./src/lib/supabase";
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `${supabaseUrl}/graphql/v1?apikey=${supabaseKey}`,

  //   schema: "./src/lib/documents/**/*.gql",
  documents: ["./src/lib/documents/**/*.gql"],
  generates: {
    "./src/lib/__generated__/client/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./src/lib/__generated__/server/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
