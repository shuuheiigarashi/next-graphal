import { useMutation, gql, useQuery } from "@apollo/client";
import { Todo, TodoPresenter } from "./TodoPresenter";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      completed
    }
  }
`;

export const TodoContainer = () => {
  const { data: todos } = useQuery<Todo[]>("todos", async () => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GET_TODOS }),
    });
    const result = await response.json();
    return result.data.todos;
  });
  return <TodoPresenter todos={todos} />;
};
