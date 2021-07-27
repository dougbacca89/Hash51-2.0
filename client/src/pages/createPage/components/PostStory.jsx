import React, {useContext} from 'react';

import {
  Box,
  Button,
  Flex,
  Textarea
} from "@chakra-ui/react";

import { EvidenceContext } from '../../../contexts/EvidenceContext';

const PostComment = () => {
  const { postStory } = useContext(EvidenceContext);

  const postClickHandler = () => {

  };

  return (
    <Flex
      mt="1.25vh"
    >
      <Box 
        bg="purple.200" 
        mb="1.25vh" 
        w="52vw" 
        ml="2vw" 
        borderLeftRadius={10}
      >
        <Textarea
          placeholder="Tinfoil hat not included..."
          fontSize="14px"
          color="black"
          overflowY="scroll"
          h="5px"
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `rgba(0, 0, 0, 0.5)`,
            },
          }}
        />
      </Box>
      <Button 
        w="4vw" 
        h="80px"
        borderLeftRadius={0} 
        backgroundColor="#3a2a5e"
        onClick={postClickHandler}
      >
        Post
      </Button>
    </Flex>
  )
};

export default PostComment;
