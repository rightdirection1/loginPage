import { ChakraProvider, Box } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";

function App() {
  const gradientBackground = {
    backgroundImage: "linear-gradient(218deg, #9181F4 -5.84%, #5038ED 106.73%)",
    backgroundAttachment: "fixed", // If you want to fix the background
    backgroundSize: "cover", // You can adjust this as needed
  };

  return (
    <ChakraProvider>
      <Box
        style={gradientBackground}
        
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LoginForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;

