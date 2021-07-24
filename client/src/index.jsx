import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"

import App from './pages/App.jsx';

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>, 
  document.getElementById('app')
);
