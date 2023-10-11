import React, { useState, useEffect } from "react";
import {
  FormLabel,
  Button,
  Box,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Checkbox from "./UI/CheckBox";
import InputField from "./UI/InputField";
import CustomButton from "./UI/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUserName = localStorage.getItem("username");
    if (savedUserName) {
      setUsername(savedUserName);
      setRememberMe(true);
    }
  }, []);

  const changeUsername = (e) => {
    setUsername(e.target.value);
    validateEmail(username);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    validatePassword(password);
  };

  const isChecked = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = () => {
    validateEmail(username);
    validatePassword(password);

    if (emailError === "" && passwordError === "") {
      setLoggedIn(true);
      if (rememberMe) {
        localStorage.setItem("username", username);
      } else {
        localStorage.removeItem("username");
      }
      setPassword(""); // Clear password after successful login
    }
  };

  const validateEmail = (email) => {
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailReg.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    setPasswordError(""); // Reset password error
    if (password.length === 0) {
      setPasswordError("Enter a password");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Za-z]/.test(password)) {
      setPasswordError("Password must contain at least one letter.");
      return;
    }

    if (!/\d/.test(password)) {
      setPasswordError("Password must contain at least one digit.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <VStack
        bg="#fff"
        p="70px"
        borderRadius="lg"
        spacing={4}
      >
        <Heading size="lg">SIGN IN YOUR ACCOUNT</Heading>
        {!loggedIn ? (
          <>
            <InputField
              label="Username"
              value={username}
              type="text"
              onChange={changeUsername}
              placeholder="Username"
              error={emailError}
            />
            <InputField
              label="Password"
              value={password}
              type="password"
              onChange={changePassword}
              placeholder="Password"
              error={passwordError}
            />
            <Flex align="left">
              <Checkbox isChecked={rememberMe} onChange={isChecked} />
              <FormLabel ml={2} mb={0}>
                Remember me
              </FormLabel>
            </Flex>
            <CustomButton
              onClick={handleLogin}
              label="Login"
              gradient="linear-gradient(100deg, #9181F4 -5.85%, #5038ED 109.55%)"
            />
          </>
        ) : (
          <>
            <Box color="green.500">Hi, {username}!</Box>
            <CustomButton
              onClick={handleLogout}
              label="Logout"
              gradient="linear-gradient(100deg, #9181F4 -5.85%, #5038ED 109.55%)"
            />
          </>
        )}
      </VStack>
    </Box>
  );
};

export default LoginForm;
