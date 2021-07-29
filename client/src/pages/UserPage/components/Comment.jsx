import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Flex,
  Image
} from "@chakra-ui/react";

const Comment = (props) => {
  const { comment } = props;
  const { commentBody, userName, profileImage } = comment;
  
  return (
  <Box  
    bg="gray.700" 
    mb="1.25vh" 
    w="56vw" 
    ml="2vw" 
    borderRadius={5}
    

  >
    <Flex>
      <Image 
        src={profileImage}
        borderLeftRadius={5}
        objectFit="cover"
        h="8vh"
        w="8vh"
      />
      <Text 
        p={1}
        ml="6px"  
        minH="2vh"
        fontSize="15px"
      >
        {userName}:  
          <Text 
          p={1}
          ml="10px"  
          minH="2vh"
          fontSize="11px"
          color="green.500"
        >
          {commentBody}
        </Text> 
      </Text>
    
    </Flex>
  </Box>
  );
};

Comment.propTypes = {
  comment: PropTypes.isRequired,
};

export default Comment;
