/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, Button} from "@chakra-ui/react";
import { EvidenceContextProvider } from './contexts/EvidenceContext';
import { UserContextProvider } from './contexts/UserContext';
import { DisplayContextProvider } from './contexts/DisplayContext';

import App from './pages/App.jsx';
import myNewTheme from './theme';


// const toggleTheme = (theme) => {
//   if(theme){
//     return myNewTheme2;
//   }
//   return myNewTheme;

// };

ReactDOM.render(
  <ChakraProvider theme={myNewTheme}>
    <DisplayContextProvider>
      <UserContextProvider>
        <EvidenceContextProvider>
          <Router>
            <Button >Theme</Button>
            <App />
          </Router>
        </EvidenceContextProvider>
      </UserContextProvider>
    </DisplayContextProvider>
  </ChakraProvider>,
  document.getElementById('app')
);
