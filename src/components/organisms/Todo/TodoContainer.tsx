import { useQuery, gql } from "@apollo/client";
import { TodoPresenter } from "./TodoPresenter";

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
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <TodoPresenter todos={data.todos} />;
};
