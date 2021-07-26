import React from 'react';

import {
  Box,
  Button,
  Flex,
  Input
} from "@chakra-ui/react";

const PostComment = () => (
  <Flex>
    <Box 
      bg="purple.200" 
      mb="1.25vh" 
      w="48vw" 
      ml="2vw" 
      borderLeftRadius={10}
    >
      <Input 
        type="comment" 
        placeholder="comment" 
        borderRightRadius={0}
      />
    </Box>
    <Button 
      w="8vw" 
      borderLeftRadius={0} 
      backgroundColor="#3a2a5e"
    >
      Post
    </Button>
  </Flex>
  );

export default PostComment;
