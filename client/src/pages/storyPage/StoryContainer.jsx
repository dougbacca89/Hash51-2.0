/* eslint-disable import/extensions, no-unused-vars */

import React, { useState } from 'react';
import  { useParams } from 'react-router-dom';
import { Heading } from "@chakra-ui/react";

import PropTypes from 'prop-types';

import User from './components/User.jsx';
import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';
import CommentList from './components/CommentList.jsx';
import PostComment from './components/PostComment.jsx';

const StoryContainer = props => {
  const { user } = props;
  const { nasa_id } = useParams();
  return (
    <div>
      <Heading>{ nasa_id }</Heading>
    </div>
  );
};

StoryContainer.defaultProps = {
  user: null,
};

StoryContainer.propTypes = {
  user: null,
};

export default StoryContainer;
