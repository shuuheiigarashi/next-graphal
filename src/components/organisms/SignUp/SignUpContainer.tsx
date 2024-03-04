import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignUpPresenter } from "./SignUpPresenter";

export const SignUpContainer = () => {
  const { handleSubmit, register } = useForm<FieldValues>();

  const handleSignUp: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <SignUpPresenter
      handleSignUp={handleSignUp}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
};
