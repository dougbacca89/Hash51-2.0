import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box
} from "@chakra-ui/react";

const Conspirator = (props) => {
  const { conspirator } = props;
  const { userName } = conspirator;
  
  return (
    <Box 
      bg="gray.800" 
      mb="1px" 
      w="10vw" 
      borderRadius={10}
    >
      <Box 
        bg="purple.100" 
        w="10vw" 
        h="3vw" 
        borderTopRadius={10}
      />
      <Text 
        ml="10px" 
        fontSize="10px"
        color="green.500"
      >
        {userName}
      </Text>
    </Box>
  );
};

Conspirator.propTypes = {
  conspirator: PropTypes.isRequired,
};

export default Conspirator;
