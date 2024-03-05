import { LabelOnInput } from "@/components/moleclues/LabelOnInput";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface SignInPresenterProps {
  handleSubmit: UseFormHandleSubmit<any>;
  handleSignIn: SubmitHandler<any>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignInPresenter = ({
  handleSubmit,
  handleSignIn,
  register,
  loading,
}: SignInPresenterProps) => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <VStack>
        <Heading>Sign In</Heading>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <LabelOnInput label="email" labelFor="email" register={register} />
          <LabelOnInput
            label="password"
            labelFor="password"
            register={register}
          />
          <Box m={4} textAlign="center">
            <Button
              colorScheme="blue"
              p={4}
              borderRadius={8}
              type="submit"
              isLoading={loading}
            >
              Sign In
            </Button>
          </Box>
        </form>
      </VStack>
    </Flex>
  );
};
