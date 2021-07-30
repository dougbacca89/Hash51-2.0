import React, { useContext }from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image
} from "@chakra-ui/react";

import PostStory from './PostStory';
import { EvidenceContext } from '../../../contexts/EvidenceContext';
import { UserContext } from '../../../contexts/UserContext';




const NewStory = (props) => {
  const { user } = props;
  const { userName } = user;

  const { href } = useContext(EvidenceContext);
  const { userObj } = useContext(UserContext);
  
  return (
    <div>
      <Box
        bg="gray.800" 
        mb=".5vh" 
        w="60vw" 
        borderTopRadius={10}
      >
        <Text 
          ml="10px" 
          mb="10px"
          fontSize="25px"
          color="green.500"
        >
        Tell your story {userName}
        </Text>
        <Image
          src={href}
          objectFit="contain"
          w="60vw"
          h="60vh" 
          bg="gray.800" 
        />
        { userObj.username ? (
          <PostStory />
        ) : (
          <div />
        )}
        
      </Box>
    </div>
  );
};

NewStory.propTypes = {
  user: PropTypes.isRequired,
};

export default NewStory;
