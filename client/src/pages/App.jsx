/* eslint-disable import/extensions, no-console, no-unused-vars, import/no-unresolved */

import React, { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Flex,
} from "@chakra-ui/react";

import CreatePageContainer from './createPage/CreateContainer';
import LoginContainer from './loginPage/LoginContainer';
import UserContainer from './UserPage/UserContainer';
import SearchContainer from './searchPage/SearchContainer';
import Header from './Header.jsx';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div>
      <Header />
      <Flex
        flexDirection="column"
        width="100wh"
        minH="92.75vh"
        backgroundColor="#3a2a5e"
        justifyContent="top"
        alignItems="center"
        pt="20px"
      >
        <Switch>
          <Route exact path="/">
            <UserContainer user={user}/>
          </Route>
          <Route path="/userLogin">
            <LoginContainer user={user} />
          </Route>
          <Route exact path="/story/:nasa_id">
            <CreatePageContainer user={user}/>
          </Route>
          <Route exact path="/userPage">
            <UserContainer user={user}/>
          </Route>
          <Route path="/search">
            <SearchContainer user={user}/>
          </Route>
        </Switch>
      </Flex>
    </div>
  );
};

export default App;
