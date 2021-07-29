import React, { useContext } from 'react';

import {
  Box,
  Button,
  Flex,
  Textarea
} from "@chakra-ui/react";

import { DisplayContext } from '../../../contexts/DisplayContext';


const PostComment = (props) => {
  const { post_id } = props;
  const { fetchStories, handleCommentBody, postComment } = useContext(DisplayContext);

  return (
  <Flex>
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
        onChange={handleCommentBody}
      />
    </Box>
    <Button 
      w="4vw" 
      h="80px"
      borderLeftRadius={0} 
      backgroundColor="#3a2a5e"
      onClick={() => postComment(post_id)}
    >
      Post
    </Button>
  </Flex>
  )
};

export default PostComment;
