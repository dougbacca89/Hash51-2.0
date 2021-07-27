/* eslint-disable import/extensions, no-unused-vars */

import React, { useState, useContex } from 'react';
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


const UserContainer = props => {
  const { user } = props;

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
        {conspiracies.map((conspiracy) => <Story key={conspiracy.text} conspiracy={conspiracy}/>)}
      </Box>
    </Flex>
  );
};

// UserContainer.propTypes = {
//   user: PropTypes.isRequired,
// };

export default UserContainer;
