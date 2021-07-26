/* eslint-disable import/extensions, no-unused-vars */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Flex,
  Text,
  Box,
  Square, 
  Center
} from "@chakra-ui/react";

import LoginContainer from '../loginPage/LoginContainer.jsx';
import User from './components/User.jsx';
import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';
import CommentList from './components/CommentList.jsx';
import PostComment from './components/PostComment.jsx';

const StoryContainer = props => {
  const { user } = props;
  const { conspirators, conspiracies } = user;

  return (
    <Flex color="white">
      <Box w="10vw" mr="10px">
        <User user={user}/>
        <ConspiratorList conspirators={conspirators}/>
      </Box>
      <Box 
        maxH="80vh" 
        minW="50vw" 
        verticalAlign="top" 
        borderRadius={10} 
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
        <Story conspiracies={conspiracies}/>
        <Story conspiracies={conspiracies}/>
        <Story conspiracies={conspiracies}/>
      </Box>
    </Flex>
  );
};

StoryContainer.defaultProps = {
  user: null,
};

StoryContainer.propTypes = {
  user: null,
};

export default StoryContainer;
