import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box
} from "@chakra-ui/react";

const User = (props) => {
  const { user } = props;
  const { userName, conspiracies, conspirators } = user;
  
  return (
    <Box 
      bg="purple.400" 
      mb="1px" 
      w="10vw" 
      borderRadius={10}
    >
      <Box 
        bg="purple.100" 
        w="10vw" 
        h="10vw" 
        borderTopRadius={10}
      />
      <Text 
        ml="10px" 
        fontSize="12px"
      >
        {userName}
      </Text>
      <Text 
        ml="10px" 
        fontSize="12px"
      >
        # of conspiracies: {conspiracies.length}
      </Text>
      <Text 
        ml="10px" 
        fontSize="12px"
      >
        # of conspirators: {conspirators.length}
      </Text>
    </Box>
  );
};

// User.propTypes = {
//   user: PropTypes.isRequired,
// };

export default User;
