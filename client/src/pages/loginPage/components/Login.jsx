import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Link,
  FormControl,
  InputRightElement
} from "@chakra-ui/react";

const Login = props => {
  const { createUserClick } = props;
  const [showPassword, setShowPassword] = useState(false);
 
  return ( 
    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="purple.400">We want to believe...</Heading>
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
              type="submit"
              variant="solid"
              colorScheme="purple"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
    <Box>
      Do we know you?{" "}
      <Button color="red.500" onClick={createUserClick}>
        Sign Up
      </Button>
    </Box>
  </Flex>
  );
};

Login.propTypes = {
  createUserClick: PropTypes.isRequired,
};

export default Login;
