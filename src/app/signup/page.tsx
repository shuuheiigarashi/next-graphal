"use client";
import { Box } from "@chakra-ui/react";
import WithApollo from "../../components/functional/WithApollo";
import { SignUp } from "@/components/templates/SignUp";

export default function Home() {
  return (
    <Box margin="0 auto">
      <WithApollo>
        <SignUp />
      </WithApollo>
    </Box>
  );
}
