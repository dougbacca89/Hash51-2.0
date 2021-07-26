/* eslint-disable no-console */

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  FormControl,
  InputRightElement
} from "@chakra-ui/react";

import { UserContext } from '../../../contexts/UserContext';

const Login = props => {
  const { createUserClick } = props;
  const [showPassword] = useState(false);

  const { isLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn);

  return (
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="green.500">We want to believe...</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
            borderRadius={10}
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                />
                <Input type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm">
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              borderRadius={10}
              color="white"
              type="submit"
              variant="solid"
              bg="purple.600"
              _hover={{ bg: "green.500" }}
            >
              Login
            </Button>
            <Box>
              Do we know you?{" "}
            </Box>
            <Button
              borderRadius={10}
              color="white"
              onClick={createUserClick}
              variant="solid"
              bg="purple.600"
              _hover={{ bg: "green.500" }}
            >
              Sign Up
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

Login.propTypes = {
  createUserClick: PropTypes.func.isRequired,
};

export default Login;
