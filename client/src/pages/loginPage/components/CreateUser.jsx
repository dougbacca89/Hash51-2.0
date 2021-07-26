/* eslint-disable no-console */

import React, { useState, useContext } from 'react';
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

const CreateUser = () => {
  const { isLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn);
  const [showPassword] = useState(false);

  return (
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="green.500">We want you to believe, too...</Heading>
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
                  placeholder="New Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm">
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
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
                  placeholder="Confirm password"
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
              Create user
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default CreateUser;
