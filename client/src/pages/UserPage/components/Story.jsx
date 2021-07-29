import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  Image,
  Flex,
  Heading,
  Button
} from "@chakra-ui/react";

import CommentList from './CommentList';
import { UserContext } from '../../../contexts/UserContext';


const Story = (props) => {
  const { story } = props;
  const { userName, nasaTitle, userTitle, href, bodyText, comments, _id } = story;

  const { addConspirator } = useContext(UserContext);
  
  return (
    <div>
      <Box 
        bg="gray.800" 
        mb=".5vh" 
        w="60vw" 
        h="59vh"
        borderTopRadius={10}
      >
        <Flex>
          <Image
            src={href}
            fit="cover"
            bg="purple.100"
            w="45vw"
            h="55vh" 
            borderTopLeftRadius={10}
          />
          <Box 
            w="17vw"
          >
            <Heading 
              mt="2vh"
              p={2}
              maxH="12vh"
              fontSize="19px"
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
              {userTitle}
            </Heading>
              <Button
                mt="20px"
                ml="10px"
                borderRadius={10}
                type="submit"
                variant="solid"
                colorScheme="green"
                w="14vw"
                h="25px"
              >
                Add to favorites
              </Button>
            <Text
              fontSize="12px"
              p={3}
              h="33vh"
              mt={3}
              color="green.500"
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
              <Text
                ml="10px" 
                fontSize="10px"
                mt={1}
                as="u"
                color="white"
                onClick={() => addConspirator(userName)}
              >
                Created by {userName}
              </Text>
            </Text>
          </Box>
        </Flex>
        <Text 
          ml="10px" 
          fontSize="10px" 
          mb="1vh"
        >
          NASA image title: {nasaTitle}
        </Text>
      </Box>
      <CommentList comments={comments} post_id={_id}/>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.isRequired,
};

export default Story;
