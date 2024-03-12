import { LabelOnInput } from "@/components/moleclues/LabelOnInput";
import { Box, Button, Flex, Heading, VStack, ListItem } from "@chakra-ui/react";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoPresenterProps {
  todos: Todo[];
}

export const TodoPresenter = ({ todos }: TodoPresenterProps) => {
  return (
    <VStack align="stretch" spacing={4}>
      {todos.map((todo) => (
        <ListItem key={todo.id}>{todo.title}</ListItem>
      ))}
    </VStack>
  );
};
