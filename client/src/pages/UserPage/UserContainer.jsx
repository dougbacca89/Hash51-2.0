/* eslint-disable import/extensions, no-unused-vars, no-console */

import React, { useState, useContext, useEffect } from 'react';
import  { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';



import {
  Flex,
  Text,
  Box,
 
} from "@chakra-ui/react";


import User from './components/User.jsx';
import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';
import { DisplayContext } from '../../contexts/DisplayContext';

import { UserContext } from '../../contexts/UserContext';

const UserContainer = props => {
  const { user } = props;
  const { conspirators } = user;

  const { stories, fetchStories } = useContext(DisplayContext);
  const { userObj, favorites, getEvidence, getConspirators, getUser } = useContext(UserContext);
  // console.log('HERE ARE FAVORITES', favorites);


  useEffect(() => {
    getUser();
    fetchStories();
    getEvidence();
    getConspirators();  },
    [JSON.stringify(userObj)]);

  return (
    <div>
    
      <Flex color="white">
      {userObj.username ? 
      (<Box w="10vw" mr="10px">
        <div>
          <User user={user}/>
          <ConspiratorList conspirators={conspirators}/>
        </div>
      </Box>) : (
        <div />
      )}
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
        {/* eslint-disable-next-line no-underscore-dangle */}
        {stories.map((story) => <Story key={story._id} story={story}/>)}
      </Box>
    </Flex>
    </div>
  );
};

UserContainer.propTypes = {
  user: PropTypes.isRequired,
};

export default UserContainer;
