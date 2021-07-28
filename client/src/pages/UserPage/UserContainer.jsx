/* eslint-disable import/extensions, no-unused-vars, no-console */

import React, { useState, useContext } from 'react';
import  { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';



import {
  Flex,
  Box,
} from "@chakra-ui/react";

import User from './components/User.jsx';
import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';
import { UserContext } from '../../contexts/UserContext';

const StoryContainer = props => {
  const { user } = props;

  const { userObj } = useContext(UserContext);
  console.log(userObj);

  // Using Params to Isolate Image
  // const { nasa_id } = useParams();
  // return (
  //   <div>
  //     <Heading>{ nasa_id }</Heading>
  //   </div>

  const { conspirators, conspiracies } = user;

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
        {conspiracies.map((conspiracy) => <Story key={conspiracy.userName} conspiracy={conspiracy}/>)}
      </Box>
    </Flex>
  );
};

StoryContainer.propTypes = {
  user: PropTypes.func.isRequired,
};

export default StoryContainer;
