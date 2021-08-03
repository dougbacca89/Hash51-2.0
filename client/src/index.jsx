/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { EvidenceContextProvider } from './contexts/EvidenceContext';
import { UserContextProvider } from './contexts/UserContext';
import { DisplayContextProvider } from './contexts/DisplayContext';
import {SocketContextProvider} from './contexts/SocketContext';
import App from './pages/App.jsx';

ReactDOM.render(
  <ChakraProvider>
    <DisplayContextProvider>
      <UserContextProvider>
        <SocketContextProvider>
           <EvidenceContextProvider>
            <Router>
              <App />
            </Router>
          </EvidenceContextProvider>
        </SocketContextProvider>
      </UserContextProvider>
    </DisplayContextProvider>
  </ChakraProvider>,
  document.getElementById('app')
);
