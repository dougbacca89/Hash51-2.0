/* eslint-disable import/extensions, no-unused-vars */

import React, { useState } from 'react';
import  { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Flex,
  Box,
} from "@chakra-ui/react";


import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';

const CreateContainer = props => {
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
        <ConspiratorList conspirators={conspirators}/>
      </Box>
    </Flex>
  );
};

StoryContainer.propTypes = {
  user: PropTypes.func.isRequired,
};

export default CreateContainer;
