import React from "react";
import { Flex, Heading, Link, Box } from "@chakra-ui/react";

const Header = () => (
  <div>
    <Flex justify="space-between" borderBottom="1px" bg="#201830" p={3}>
      <Heading as="h3" size="lg" m={1} color="green.500">
        Hash 51
      </Heading>
      <Heading as="h3" size="md" m={2}>
        <Link color="green.500">Get evidence</Link> {" "}
        <Link color="green.500">Find conspirators</Link>
      </Heading>
    </Flex>
    <Box width="full" height="8px" bg="black" />
  </div>
);

export default Header;