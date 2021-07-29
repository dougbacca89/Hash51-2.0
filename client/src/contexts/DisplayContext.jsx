/* eslint-disable func-style */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const DisplayContext = createContext();

function DisplayContextProvider({ children }){

  const [ stories, setStories ] = useState([]);
  const [ commentBody, setCommentBody ] = useState('');

  const handleCommentBody = (event) => setCommentBody(event.target.value);

  

  const fetchStories = async() => {
    await axios.get('/routes/story')
    .then(result => {
      setStories(result.data.reverse());
    });
  };

  const postComment = async(post_id) => {
    const comment = { commentBody, post_id, userName: "testUser" };
    await axios.post('/routes/story/comment', comment);
  };


  const displayProps = {
    stories,
    setStories,
    fetchStories,
    postComment,
    handleCommentBody
  };

  return (
    <DisplayContext.Provider value={displayProps}>
      {children}
    </DisplayContext.Provider>
  );
}


DisplayContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { DisplayContext, DisplayContextProvider };
