import React from 'react';

import {
  Text,
  Box
} from "@chakra-ui/react";

const Story = () => (
  <Box bg="purple.400" mb="1px" w="80vw" borderRadius={10} >
      <Text ml="10px" fontSize="10px">User name -- conspiracy name</Text>
      <Box bg="purple.100" w="80vw" h="50vh" />
      <Text ml="10px" fontSize="10px">story</Text>
  </Box>
  );

export default Story;
