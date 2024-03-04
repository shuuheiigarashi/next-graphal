import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignInPresenter } from "./SignInPresenter";

export const SignInContainer = () => {
  const { handleSubmit, register } = useForm<FieldValues>();

  const handleSignIn: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <SignInPresenter
      handleSignIn={handleSignIn}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
};
