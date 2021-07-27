/* eslint-disable func-style */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const EvidenceContext = createContext();

function EvidenceContextProvider({ children }){


  const haveEvidence = 'Yes We Do';
  const [ searchResults, setSearchResults ] = useState([]);
  const [ searchImage, setSearchImage ] = useState({});


  const fetchSearch = async(query) => {
    await axios.post('/routes/search', { query })
    .then(results => {
      // console.log(results);
      setSearchResults(results.data);
    });
  };

  const fetchImage = async(query) => {
    await axios.post('/asset', { query })
    .then(results => {
      // eslint-disable-next-line no-console
      console.log(results);
      setSearchImage(results.data);
    });
  };

  const evidenceProps = {
    haveEvidence,
    searchResults,
    fetchSearch,
    searchImage,
    fetchImage
  };

  return (
    <EvidenceContext.Provider value={evidenceProps}>
      {children}
    </EvidenceContext.Provider>
  );
}

EvidenceContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};


export { EvidenceContext, EvidenceContextProvider };
