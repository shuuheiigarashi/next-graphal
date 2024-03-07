import { useMutation, gql } from "@apollo/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignUpPresenter } from "./SignUpPresenter";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const SIGNUP_MUTATION = gql(`mutation SignUpMutation(
  $email: String!
  $password: String!
  $username: String!
) {
  sign_up_user(p_email: $email, p_password: $password, p_username: $username) {
    id
    name
    email
    password
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

  const handleSignUp: SubmitHandler<FieldValues> = async (data) => {
    try {
      // Supabaseにサインアップリクエストを送信
      const { user, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw error;
      }

      await signUp({
        variables: {
          email: data.email,
          password: data.password,
          username: data.username,
        },
      });

      // ユーザー登録が成功した場合の処理
      console.log("User signed up:", user);
      router.push("/signin");
    } catch (error) {
      // エラー処理
      console.error("Error signing up:", error);
    }
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
