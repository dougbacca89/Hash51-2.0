import React from 'react';

import {
  Text,
  Box
} from "@chakra-ui/react";

const Story = () => (
  <Box bg="purple.700" mb="1px" w="60vw" borderRadius={10} mb="5">
      <Text ml="10px" fontSize="10px">conspiracy name</Text>
      <Box bg="purple.100" w="60vw" h="50vh" />
      <Text ml="10px" fontSize="10px">Created at by user name</Text>
  </Box>
  );

export default Story;
