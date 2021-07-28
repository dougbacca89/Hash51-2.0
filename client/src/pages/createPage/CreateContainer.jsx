/* eslint-disable import/extensions, no-unused-vars */

import React, { useState } from 'react';
import  { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Flex,
  Box,
} from "@chakra-ui/react";

import NewStory from './components/NewStory';


const CreatePageContainer = props => {
  const { user } = props;
  const { conspirators, conspiracies } = user;

  return (
    <Flex>
      <Box
        maxH="89vh"
        minW="50vw"
        verticalAlign="top"
      >
        <NewStory user={user}/>

      </Box>
    </Flex>
  );
};

CreatePageContainer.propTypes = {
  user: PropTypes.func.isRequired,
};

export default CreatePageContainer;
