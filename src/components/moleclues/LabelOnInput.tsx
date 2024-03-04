import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

interface LabelOnInputProps {
  label: string;
  labelFor: string;
  register: UseFormRegister<FieldValues>;
}

export const LabelOnInput = ({
  label,
  labelFor,
  register,
}: LabelOnInputProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={labelFor} textAlign="start">
        {label}
      </FormLabel>
      <Input
        id={labelFor}
        bg="white"
        borderRadius={8}
        p={4}
        {...register(labelFor)}
      />
    </FormControl>
  );
};
