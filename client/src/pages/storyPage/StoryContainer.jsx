/* eslint-disable import/extensions, no-unused-vars */

import React, { useState } from 'react';

import User from './components/User.jsx';
import ConspiratorList from './components/ConspiratorList.jsx';
import Story from './components/Story.jsx';
import CommentList from './components/CommentList.jsx';
import PostComment from './components/PostComment.jsx';

const StoryContainer = props => {
  const { user } = props;

  return (
    <div>
      <h1>Stories</h1>
    </div>
  );
};

export default StoryContainer;
