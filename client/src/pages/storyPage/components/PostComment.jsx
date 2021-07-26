import React from 'react';

import {
  Text,
  Box,
  Button,
  Flex
} from "@chakra-ui/react";

const PostComment = () => (
  <Flex>
    <Box bg="purple.200" mb="1.25vh" w="46vw" ml="2vw" borderLeftRadius={10}>
      <Text ml="10px" fontSize="12px" minH="5vh">Post comment</Text>
    </Box>
    <Button w="10vw" borderLeftRadius={0}/>
  </Flex>
  );

export default PostComment;
