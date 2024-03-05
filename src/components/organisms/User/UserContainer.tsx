import { useQuery, gql } from "@apollo/client";
import { UserPresenter } from "./UserPresenter";

const ALL_USERS = gql(`query ALL_USERS {
  users {
    name
  }
}`);

export const UserContainer = () => {
  const { data, loading, error } = useQuery(ALL_USERS);

  return <UserPresenter data={data} loading={loading} error={error} />;
};
