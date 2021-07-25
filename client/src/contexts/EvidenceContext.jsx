/* eslint-disable func-style */
import React, { createContext } from 'react';


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

export { EvidenceContext, EvidenceContextProvider };
