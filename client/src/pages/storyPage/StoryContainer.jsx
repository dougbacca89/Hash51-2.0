import React, { useState } from 'react';
import PropTypes from 'prop-types';

import User from './components/User.jsx';
import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';
import CommentList from './components/CommentList.jsx';
import PostComment from './components/PostComment.jsx';

const StoryContainer = props => {
  const { user } = props;
  
  return (
    <div />
  );
};

StoryContainer.propTypes = {
};

export default StoryContainer;
