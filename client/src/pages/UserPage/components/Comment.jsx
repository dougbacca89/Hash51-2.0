import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Flex,
  Image
} from "@chakra-ui/react";

import { UserContext } from '../../../contexts/UserContext';

const Comment = (props) => {
  const { comment } = props;
  const { commentBody, userName, profileImage } = comment;

  const { addConspirator, userObj } = useContext(UserContext);
  
  return (
  <Box  
    bg="gray.700" 
    mb="1.25vh" 
    w="56vw" 
    ml="2vw" 
    borderRadius={5}
    

  >
    <Flex

    >
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
        // eslint-disable-next-line consistent-return
        onClick={() => {
          if(userObj.username) {
            return addConspirator(userName);
          }
        }}
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
