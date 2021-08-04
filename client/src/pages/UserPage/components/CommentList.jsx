/* eslint-disable camelcase */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

import Comment from './Comment';
import PostComment from './PostComment';
import { UserContext } from '../../../contexts/UserContext';

const CommentList = (props) => {
  // eslint-disable-next-line camelcase
  const { comments, post_id } = props;
  const { userObj } = useContext(UserContext);

  const bg = useColorModeValue("#201830", "#4a3770");
  const textColor = useColorModeValue("green.500", "green.300");

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
        mb="1vh"
        fontSize="10px"
      >
        Comments
      </Text>

      {comments.map((comment) => <Comment key={comment.commentBody} comment={comment} />)}

      {userObj.username ? (
        <PostComment post_id={post_id} />
      ) : (
        <Text
          ml="2vw"
          pb="1vh"
          fontSize="10px"
          color={textColor}
        >
          login to comment.
        </Text>
      )}

    </Box>
  );
};

// CommentList.propTypes = {
//   comments: PropTypes.isRequired,
//   post_id: PropTypes.isRequired
// };

export default CommentList;
