import { All_UsersQuery } from "@/lib/__generated__/client/graphql";
import { ApolloError } from "@apollo/client";
import { Box } from "@chakra-ui/react";

interface UserPresenterProps {
  data: All_UsersQuery | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

export const UserPresenter = ({ data, error, loading }: UserPresenterProps) => {
  return (
    <>
      {loading && <Box>読み込み中</Box>}
      <Box>
        {error && <Box>{error.message}</Box>}
        <ul>
          {data && data.users.map((v, i) => <li key={String(i)}>{v.name}</li>)}
        </ul>
      </Box>
    </>
  );
};
