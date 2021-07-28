import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";

import CommentList from './CommentList';


const Story = (props) => {
  const { story } = props;
  const { userName, title, href, bodyText } = story;
  
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
        {title}
      </Text>
      <Flex>
        <Image
          src={href}
          objectFit="cover"
          bg="purple.100"
          w="50vw"
          h="50vh" 

        />
        <Box w="17vw">
          <Heading 
            ml="10px" 
            fontSize="10px"
          >
            Created at by {userName}
          </Heading>
          <Text
            fontSize="12px"
          >
            {bodyText}
          </Text>
        </Box>
      </Flex>
    </Box>
    {/* <CommentList comments={comments}/> */}
  </div>
  );
};

// Story.propTypes = {
//   conspiracy: PropTypes.isRequired,
// };

export default Story;
