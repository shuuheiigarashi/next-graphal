"use client";
import { Box } from "@chakra-ui/react";
import WithApollo from "../../components/functional/WithApollo";
import { SignIn } from "@/components/templates/SignIn";

export default function Home() {
  return (
    <Box margin="0 auto">
      <WithApollo>
        <SignIn />
      </WithApollo>
    </Box>
  );
}
