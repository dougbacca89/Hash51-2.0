import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box
} from "@chakra-ui/react";

import Comment from './Comment';
import PostComment from './PostComment';

const CommentList = (props) => {
  const { comments } = props;
  
  return (
    <Box 
        bg="purple.400" 
        mb="7vh" 
        w="60vw" 
        borderBottomRadius={10}
    >
      <Text 
        ml="10px" 
        fontSize="10px" 
        mb="1vh"
      >
        Comments
      </Text>
      {comments.map((comment) => <Comment key={comment.text}comment={comment}/>)}
      <PostComment />
    </Box>
  );
};

// CommentList.propTypes = {
//   comments: PropTypes.isRequired,
// };

export default CommentList;
