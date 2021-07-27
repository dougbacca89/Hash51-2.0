/* eslint-disable func-style */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const EvidenceContext = createContext();

function DisplayContextProvider({ children }){

  const haveEvidence = 'Yes We Do';
  const [ searchResults, setSearchResults ] = useState([]);
  const [ searchImage, setSearchImage ] = useState({});



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