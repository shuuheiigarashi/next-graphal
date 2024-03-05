import { useMutation, gql } from "@apollo/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignUpPresenter } from "./SignUpPresenter";
import { useRouter } from "next/navigation";

const SIGNUP_MUTATION =
  gql(`mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }`);

export const SignUpContainer = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<FieldValues>();

  const [signUp, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      // ユーザー登録が成功した場合の処理
      console.log(data);
      router.push("/signin");
    },
    onError: (error) => {
      // ユーザー登録が失敗した場合の処理
      console.error("Error signing up:", error);
    },
  });

  const handleSignUp: SubmitHandler<FieldValues> = (data) => {
    signUp({
      variables: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <SignUpPresenter
      handleSignUp={handleSignUp}
      handleSubmit={handleSubmit}
      register={register}
      loading={loading}
    />
  );
};
