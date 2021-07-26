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

  return (
    <Flex color="white">
      <Center w="15vw" bg="green.500" mr="10px">
        <Text>Box 1</Text>
      </Center>
      <Box flex="1" bg="green.500" h="70vh" minW="75vw">
        <Text>Box 3</Text>
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
