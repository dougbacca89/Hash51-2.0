import React from 'react';

import {
  Flex,
  Text,
  Box,
  Square, 
  Center
} from "@chakra-ui/react";

const Conspirator = () => (
  <Box bg="purple.400" mb="1px" w="10vw" borderRadius={10} >
    <Box bg="purple.100" w="10vw" h="3vw" borderTopRadius={10}/>
    <Text ml="10px" fontSize="10px">Conspirator name</Text>

  </Box>
  );

export default Conspirator;
