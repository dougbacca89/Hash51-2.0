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
      w="8vw" 
      mb="1px" 
      bg="gray.800" 
      borderRadius={10}
    >
      <Image 
        src={profileImage}
        h="8vw" 
        w="8vw" 
        bg="purple.100" 
        objectFit="cover"
        borderTopRadius={10}
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
        h="13px"
        w="8vw"
        mt="2px"
        fontSize="8px"
        colorScheme="red"
        borderTopRadius={0}
        type="delete"
        variant="solid"
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
