import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box
} from "@chakra-ui/react";

import Comment from './Comment';
import PostComment from './PostComment';
import { UserContext } from '../../../contexts/UserContext';

const CommentList = (props) => {
  // eslint-disable-next-line camelcase
  const { comments, post_id } = props;
  const { userObj } = useContext(UserContext);

  return (
    <Box
      bg="gray.800"
      mb="7vh"
      w="60vw"
      borderBottomRadius={10}
    >
      <Text
        pt=".25vw"
        ml="2vw"
        fontSize="10px"
        mb="1vh"
      >
        Comments
      </Text>
      {comments.map((comment) => <Comment key={comment.commentBody} comment={comment} />)}
      {/* eslint-disable-next-line camelcase */}
      {userObj.username ? (
        <PostComment post_id={post_id} />
      ) : (
        <Text
          ml="2vw"
          fontSize="10px"
          pb="1vh"
          color="green.500"
        >
          login to comment.
        </Text>
      )}

    </Box>
  );
};

CommentList.propTypes = {
  comments: PropTypes.isRequired,
  post_id: PropTypes.isRequired
};

export default CommentList;
