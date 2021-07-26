import React from 'react';

import {
  Text,
  Box
} from "@chakra-ui/react";

const StoryList = (props) => {
  const { conspiracies } = user;
  return (
    <Box bg="purple.700" mb="1px" w="60vw" borderRadius={10}>
      <Text ml="10px" fontSize="10px">User name -- conspiracy name</Text>
      <Box bg="purple.100" w="60vw" h="50vh" />
      <Text ml="10px" fontSize="10px">story</Text>
    </Box>
  );
};

export default StoryList;
