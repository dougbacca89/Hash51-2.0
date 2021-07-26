import React from 'react';

import {
  Text,
  Box
} from "@chakra-ui/react";

import Comment from './Comment';

const CommentList = () => (
  <Box bg="purple.700" mb="7vh" w="60vw" borderRadius={10}>
    <Text ml="10px" fontSize="10px">Comments</Text>
    <Comment />
    <Comment />
    <Comment />
    
  </Box>
  );

export default CommentList;
