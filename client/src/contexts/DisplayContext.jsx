/* eslint-disable func-style */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const DisplayContext = createContext();

function DisplayContextProvider({ children }){

  const [ stories, setStories ] = useState([]);

  

  const fetchStories = async() => {
    axios.get('/routes/story')
    .then(result => {
      setStories(result.data);
    });
  };


  const displayProps = {
    stories,
    setStories,
    fetchStories
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
