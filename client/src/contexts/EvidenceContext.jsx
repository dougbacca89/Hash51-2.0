/* eslint-disable func-style */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const EvidenceContext = createContext();

function EvidenceContextProvider({ children }){


  const haveEvidence = 'Yes We Do';
  const [ searchResults, setSearchResults ] = useState([]);


  const fetchSearch = async(query) => {
    await axios.post('/api/images/search', { query })
    .then(results => {
      console.log(results);
      setSearchResults(results.data);
    });
  };

  const evidenceProps = {
    haveEvidence,
    searchResults,
    fetchSearch
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
