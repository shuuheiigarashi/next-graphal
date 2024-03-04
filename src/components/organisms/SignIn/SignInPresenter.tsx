import { LabelOnInput } from "@/components/moleclues/LabelOnInput";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";

interface SignInPresenterProps {
  handleSignIn: () => void;
}

export const SignInPresenter = ({ handleSignIn }: SignInPresenterProps) => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <VStack>
        <Heading>Sign In</Heading>
        <LabelOnInput label="email" labelFor="email" />
        <LabelOnInput label="password" labelFor="password" />
        <Box m={4}>
          <Button
            colorScheme="blue"
            p={4}
            onClick={handleSignIn}
            borderRadius={8}
          >
            Sign In
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
};
