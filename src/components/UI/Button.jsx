import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ onClick, label, gradient }) => {
  return (
    <Button
      onClick={onClick}
      color="white"
      size="lg"
      borderRadius="lg"
      background={gradient}
      boxShadow="0px 8px 21px 0px rgba(0, 0, 0, 0.16)"
    >
      {label}
    </Button>
  );
};

export default CustomButton;