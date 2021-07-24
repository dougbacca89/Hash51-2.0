import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
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

const CreateUser = props => {
  const { updateUserClick } = props;
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
        <Heading color="purple.400">We want you to believe, too...</Heading>
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
    </Flex>
  );
};

  CreateUser.propTypes = {
    updateUserClick: PropTypes.isRequired,
  };
export default CreateUser;
