import React from 'react';

import {
  Text,
  Box
} from "@chakra-ui/react";

import CommentList from './CommentList';


const Story = () => (
  <div>
    <Box bg="purple.400" mb=".5vh" w="60vw" borderTopRadius={10}>
      <Text ml="10px" fontSize="10px">conspiracy name</Text>
      <Box bg="purple.100" w="60vw" h="30vh" />
      <Text ml="10px" fontSize="10px">Created at by user name</Text>
    </Box>
    <CommentList />
  </div>
  );

export default Story;
