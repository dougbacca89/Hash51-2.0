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
  const { userName, title, href, bodyText, comments, _id } = story;
  
  return (
  <div>
    <Box 
      bg="purple.400" 
      mb=".5vh" 
      w="60vw" 
      h="54vh"
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
        <Box 
          w="17vw"
        >
          <Heading 
            ml="10px" 
            fontSize="15px"
            mt={2}
          >
            Created at by {userName}
          </Heading>
          <Text
            fontSize="12px"
            p={3}
            h="45vh"
            mt={3}
            overflowY="scroll"
            sx={{
              '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgba(0, 0, 0, 0.5)`,
              },
            }}
          >
            {bodyText}
          </Text>
        </Box>
      </Flex>
    </Box>
    <CommentList comments={comments} post_id={_id}/>
  </div>
  );
};

Story.propTypes = {
  story: PropTypes.isRequired,
};

export default Story;
