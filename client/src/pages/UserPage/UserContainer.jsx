/* eslint-disable import/extensions, no-unused-vars */

import React, { useState, useContext, useEffect } from 'react';
import  { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Flex,
  Text,
  Box,
  Square,
  Heading,
  Center
} from "@chakra-ui/react";


import User from './components/User.jsx';
import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';
import { DisplayContext } from '../../contexts/DisplayContext';


const UserContainer = props => {
  const { user } = props;
  const { conspirators, conspiracies } = user;

  const { stories, fetchStories } = useContext(DisplayContext);

  useEffect(() => fetchStories());

  return (
    <Flex color="white">
      <Box w="10vw" mr="10px">
        <User user={user}/>
        <ConspiratorList conspirators={conspirators}/>
      </Box>
      <Box
        maxH="89vh"
        minW="50vw"
        verticalAlign="top"
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
        {stories.map((story) => <Story key={story._id} story={story}/>)}
      </Box>
    </Flex>
  );
};

// UserContainer.propTypes = {
//   user: PropTypes.isRequired,
// };

export default UserContainer;
