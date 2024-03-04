"use client";
import { Box } from "@chakra-ui/react";
import WithApollo from "../../components/functional/WithApollo";
import { User } from "@/components/templates/User";

export default function Home() {
  return (
    <Box margin="0 auto">
      <WithApollo>
        <User />
      </WithApollo>
    </Box>
  );
}
