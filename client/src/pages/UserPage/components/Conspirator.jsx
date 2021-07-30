import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image,
  Button
} from "@chakra-ui/react";

import { UserContext } from '../../../contexts/UserContext';

const Conspirator = (props) => {
  const { conspirator } = props;
  const { username, profileImage, _id } = conspirator;

  const { updateConspirator } = useContext(UserContext);
  
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
        mt="4px"
        ml="10px" 
        fontSize="10px"
        color="green.500"
      >
        {username}
      </Text>
      <Button
        mt="2px"
        fontSize="8px"
        borderTopRadius={0}
        type="delete"
        variant="solid"
        colorScheme="red"
        w="8vw"
        h="13px"
        onClick={() => updateConspirator(_id)}
      >
        Delete conspirator
      </Button>
    </Box>
  );
};

Conspirator.propTypes = {
  conspirator: PropTypes.isRequired,
};

export default Conspirator;
