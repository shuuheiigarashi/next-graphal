import { useMutation, gql } from "@apollo/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignInPresenter } from "./SignInPresenter";
import { useRouter } from "next/navigation";

const SIGNIN_MUTATION =
  gql(`mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    email
    password
    id
  }
}`);
export const SignInContainer = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<FieldValues>();

  const [signIn, { loading }] = useMutation(SIGNIN_MUTATION, {
    onCompleted: (data) => {
      // ユーザー登録が成功した場合の処理
      console.log(data);
      router.push("/user");
    },
    onError: (error) => {
      // ユーザー登録が失敗した場合の処理
      console.error("Error signing up:", error);
    },
  });

  const handleSignIn: SubmitHandler<FieldValues> = (data) => {
    signIn({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <SignInPresenter
      handleSignIn={handleSignIn}
      handleSubmit={handleSubmit}
      register={register}
      loading={loading}
    />
  );
};
