/* eslint-disable func-style */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const DisplayContext = createContext();

function DisplayContextProvider({ children }){

  const [ stories, setStories ] = useState([]);
  const [ commentBody, setCommentBody ] = useState([]);

  

  const fetchStories = async() => {
    await axios.get('/routes/story')
    .then(result => {
      setStories(result.data.reverse());
    });
  };

  const postComment = async() => {
    await axios.post('/routes/comment')
    .then(result => {
      
    });
  };


  const displayProps = {
    stories,
    setStories,
    fetchStories,
    postComment
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
