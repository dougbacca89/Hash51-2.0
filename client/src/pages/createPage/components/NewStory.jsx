import React, { useContext }from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image
} from "@chakra-ui/react";

import PostStory from './PostStory';
import { EvidenceContext } from '../../../contexts/EvidenceContext';




const Story = (props) => {
  const { user } = props;
  const { userName } = user;

  const { searchImage } = useContext(EvidenceContext);
  // eslint-disable-next-line no-console
  console.log(searchImage);
  
  return (
    <div>
      <Box 
        bg="purple.400" 
        mb=".5vh" 
        w="60vw" 
        borderTopRadius={10}
      >
        <Text 
          ml="10px" 
          mb="10px"
          fontSize="25px"
          color="white"
        >
        Tell your story {userName}
        </Text>
        <Image
          src={searchImage}
          objectFit="cover"
          bg="purple.100"
          w="60vw"
          h="40vh" 
        />
        <PostStory />
      </Box>
    </div>
  );
};

Story.propTypes = {
  user: PropTypes.isRequired,
};

export default Story;
