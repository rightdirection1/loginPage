import React from "react";
import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";

const InputField = ({ label, value, onChange, placeholder, error, type }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        bg="rgba(240, 237, 255, 0.80)"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <Box color="red.500">{error}</Box>}
    </FormControl>
  );
};

export default InputField;