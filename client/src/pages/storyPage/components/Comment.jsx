import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
} from "@chakra-ui/react";

const Comment = (props) => {
  const { comment } = props;
  const { text, userName } = comment;
  
  return (
  <Box  
    bg="purple.200" 
    mb="1.25vh" 
    w="56vw" 
    ml="2vw" 
    borderRadius={10}
  >
    <Text 
      ml="10px" 
      fontSize="12px" 
      minH="5vh"
    >
      {userName} : {text}
    </Text>
  </Box>
  );
};

Comment.propTypes = {
  comment: PropTypes.isRequired,
};

export default Comment;
