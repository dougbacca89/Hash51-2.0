import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image
} from "@chakra-ui/react";

import PostStory from './PostStory';


const Story = (props) => {
  const { user } = props;
  const { userName } = user;
  
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
        Tell your story
        </Text>
        <Image
          src="https://images-assets.nasa.gov/image/PIA22081/PIA22081~thumb.jpg"
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
  conspiracy: PropTypes.isRequired,
};

export default Story;
