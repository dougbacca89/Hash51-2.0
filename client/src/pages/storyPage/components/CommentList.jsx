import React from 'react';

import {
  Text,
  Box
} from "@chakra-ui/react";

import Comment from './Comment';
import PostComment from './PostComment';

const CommentList = (props) => {
  const { comments } = props;
  return (
    <Box bg="purple.400" mb="7vh" w="60vw" borderBottomRadius={10} alignContent="center">
      <Text ml="10px" fontSize="10px" mb="1vh">Comments</Text>
      {comments.map((comment) => <Comment comment={comment}/>)}
      <PostComment />
    </Box>
  );
};

export default CommentList;
