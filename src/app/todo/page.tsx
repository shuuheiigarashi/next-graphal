"use client";
import { Box } from "@chakra-ui/react";
import WithApollo from "../../components/functional/WithApollo";
import { Todo } from "@/components/templates/Todo";

export default function Home() {
  return (
    <Box margin="0 auto">
      <WithApollo>
        <Todo />
      </WithApollo>
    </Box>
  );
}
