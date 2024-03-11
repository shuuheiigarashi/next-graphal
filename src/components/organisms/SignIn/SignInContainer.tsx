import { useMutation, gql } from "@apollo/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignInPresenter } from "./SignInPresenter";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const SIGNIN_MUTATION =
  gql(`mutation SignIn($email: String!, $password: String!) {
  sign_in_user(p_email: $email, p_password: $password) {
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

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {
    try {
      // Supabaseにサインアップリクエストを送信
      const { user, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw error;
      }

      await signIn({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      // ユーザー登録が成功した場合の処理
      console.log("User signed up:", user);
      router.push("/user");
    } catch (error) {
      // エラー処理
      console.error("Error signing up:", error);
    }
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
