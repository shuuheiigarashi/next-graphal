import { LabelOnInput } from "@/components/moleclues/LabelOnInput";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface SignUpPresenterProps {
  handleSubmit: UseFormHandleSubmit<any>;
  handleSignUp: SubmitHandler<any>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignUpPresenter = ({
  handleSubmit,
  handleSignUp,
  register,
  loading,
}: SignUpPresenterProps) => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <VStack>
        <Heading>Sign Up</Heading>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <LabelOnInput label="name" labelFor="name" register={register} />
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
              Sign Up
            </Button>
          </Box>
        </form>
      </VStack>
    </Flex>
  );
};
