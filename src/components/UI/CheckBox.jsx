import {
    Box,
    Checkbox as ChakraCheckbox,
    Icon
  } from "@chakra-ui/react";

  import { AiOutlineCheck } from "react-icons/ai"; 

const Checkbox = ({ isChecked, onChange}) => {
    return (
      <Box display="flex" alignItems="left">
        <ChakraCheckbox
        isChecked={isChecked}
        onChange={onChange}
        colorScheme="blue"
        size="lg"
        icon={<Icon as={AiOutlineCheck} boxSize={4} />} 
      />
      </Box>
    );
  };


  export default Checkbox;