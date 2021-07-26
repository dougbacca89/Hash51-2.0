/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { EvidenceContextProvider } from './contexts/EvidenceContext';
import { UserContextProvider } from './contexts/UserContext';

import App from './pages/App.jsx';

ReactDOM.render(
  <ChakraProvider>
    <UserContextProvider>
      <EvidenceContextProvider>
        <Router>
          <App />
        </Router>
      </EvidenceContextProvider>
    </UserContextProvider>
  </ChakraProvider>,
  document.getElementById('app')
);
