import React from 'react';

import {
  Text,
  Box,
  Image
} from "@chakra-ui/react";

const User = (props) => {
  const { user } = props;
  
  return (
    <Box bg="purple.400" mb="1px" w="10vw" borderRadius={10}>
      <Box bg="purple.100" w="10vw" h="10vw" borderTopRadius={10}/>
      <Text ml="10px" fontSize="12px">User name</Text>
      <Text ml="10px" fontSize="12px"># of conspiracies</Text>
      <Text ml="10px" fontSize="12px"># of conspirators</Text>
    </Box>
  );
};

export default User;
