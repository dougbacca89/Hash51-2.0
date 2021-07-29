import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Flex,
  Textarea
} from "@chakra-ui/react";

import { DisplayContext } from '../../../contexts/DisplayContext';
import { UserContext } from '../../../contexts/UserContext';


const PostComment = (props) => {
  // eslint-disable-next-line camelcase
  const { post_id } = props;
  const { fetchStories, handleCommentBody, postComment, commentBody } = useContext(DisplayContext);
  const { userObj } = useContext(UserContext);

  const { username } = userObj;

  return (
  <Flex>
    <Box 
      bg="gray.200" 
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
        value={commentBody}
      />
    </Box>
    <Button 
      w="4vw" 
      h="80px"
      colorScheme="green"
      borderLeftRadius={0} 
      onClick={() => {
        postComment(post_id, username);
        fetchStories();
      }}
    >
      Post
    </Button>
  </Flex>
  );
};

PostComment.propTypes = {
  post_id: PropTypes.isRequired,
};
export default PostComment;
