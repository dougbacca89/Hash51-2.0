import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image
} from "@chakra-ui/react";

import { UserContext } from '../../../contexts/UserContext';


const User = () => {
  const { userObj } = useContext(UserContext);
  const { username, profileImage, favorites } = userObj;
  
  
  return (
    <Box 
      bg="gray.800" 
      mb="1px" 
      w="10vw" 
      borderRadius={10}
    >
      <Image 
        bg="purple.100" 
        w="10vw" 
        h="10vw" 
        borderTopRadius={10}
        objectFit="cover"
        src={profileImage}
      />
      <Text 
        ml="10px" 
        fontSize="12px"
        color="green.500"
      >
        {username}
      </Text>
      <Text 
        ml="10px" 
        fontSize="12px"
        color="green.500"
      >
        # of favorites: 
      </Text>
      <Text 
        ml="10px" 
        fontSize="12px"
        color="green.500"
      >
        # of conspirators: 
      </Text>
    </Box>
  );
};

export default User;
