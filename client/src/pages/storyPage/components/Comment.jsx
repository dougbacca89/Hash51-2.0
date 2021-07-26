import React from 'react';

import {
  Text,
  Box,
} from "@chakra-ui/react";

const Comment = () => (
  <Box bg="purple.200" mb="1.25vh" w="56vw" ml="2vw" borderRadius={10}>
    <Text ml="10px" fontSize="12px" minH="5vh">User comment</Text>
  </Box>
  );

export default Comment;
