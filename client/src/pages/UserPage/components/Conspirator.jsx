import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image
} from "@chakra-ui/react";

const Conspirator = (props) => {
  const { conspirator } = props;
  console.log(conspirator)
  const { username, profileImage } = conspirator;
  
  return (
    <Box 
      bg="gray.800" 
      mb="1px" 
      w="8vw" 
      borderRadius={10}
    >
      <Image 
        bg="purple.100" 
        w="8vw" 
        h="8vw" 
        borderTopRadius={10}
        objectFit="cover"
        src={profileImage}
      />
      <Text 
        ml="10px" 
        fontSize="10px"
        color="green.500"
      >
        {username}
      </Text>
    </Box>
  );
};

Conspirator.propTypes = {
  conspirator: PropTypes.isRequired,
};

export default Conspirator;
