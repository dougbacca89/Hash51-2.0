import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image
} from "@chakra-ui/react";

import CommentList from './CommentList';


const Story = (props) => {
  const { conspiracy } = props;
  const { userName, storyTitle, comments } = conspiracy;
  
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
        fontSize="15px"
      >
        {storyTitle}
      </Text>
      <Image
        src="https://images-assets.nasa.gov/image/PIA22081/PIA22081~thumb.jpg"
        objectFit="cover"
        bg="purple.100"
        w="60vw"
        h="40vh" 
      />
      <Text 
        ml="10px" 
        fontSize="10px"
      >
        Created at by {userName}
      </Text>
    </Box>
    <CommentList comments={comments}/>
  </div>
  );
};

// Story.propTypes = {
//   conspiracy: PropTypes.isRequired,
// };

export default Story;
