import { LabelOnInput } from "@/components/moleclues/LabelOnInput";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";

interface SignUpPresenterProps {
  handleSignUp: () => void;
}

export const SignUpPresenter = ({ handleSignUp }: SignUpPresenterProps) => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <VStack>
        <Heading>Sign Up</Heading>
        <LabelOnInput label="name" labelFor="name" />
        <LabelOnInput label="email" labelFor="email" />
        <LabelOnInput label="password" labelFor="password" />
        <Box m={4}>
          <Button
            colorScheme="blue"
            p={4}
            onClick={handleSignUp}
            borderRadius={8}
          >
            Sign Up
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
};
