import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Heading,
  Link,
  Box
} from "@chakra-ui/react";

const Header = () => (
  <div>
    <Flex justify="space-between" borderBottom="1px" bg="#201830" p={1}>
    <RouterLink to='/'>
        <Heading as="h3" size="lg" m={1} color="green.500" ml="14.5vw">
          Hash 51
        </Heading>
    </RouterLink>
      <Heading as="h3" size="md" m={2} mr="15vw">
        <Link color="green.500" href="/search">Get evidence</Link> {" "}
        <Link color="green.500" ml="2vw" href="/userPage">Find conspirators</Link> {" "}
        <Link color="green.500" ml="2vw" href="/userLogin">Join us</Link>
      </Heading>
    </Flex>
    <Box width="full" height="4px" bg="black" />
  </div>
);

export default Header;
