/* eslint-disable func-style */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';


const EvidenceContext = createContext();

function EvidenceContextProvider({ children }){

  const hasEvidence = 'Yes We Do';

  const evidenceProps = {
    hasEvidence,
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
