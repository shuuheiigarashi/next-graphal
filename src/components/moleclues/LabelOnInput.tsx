import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface LabelOnInputProps {
  label: string;
  labelFor: string;
}

export const LabelOnInput = ({ label, labelFor }: LabelOnInputProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={labelFor} textAlign="start">
        {label}
      </FormLabel>
      <Input id={labelFor} bg="white" borderRadius={8} p={4} />
    </FormControl>
  );
};
