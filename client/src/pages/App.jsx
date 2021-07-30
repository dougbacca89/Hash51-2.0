
import React, 
  { useState } from 'react';

import {
  Switch,
  Route
} from "react-router-dom";

import {
  Flex
} from "@chakra-ui/react";

// eslint-disable-next-line import/no-unresolved
import CreatePageContainer from './createPage/CreateContainer';
import LoginContainer from './loginPage/LoginContainer';
import UserContainer from './UserPage/UserContainer';
import SearchContainer from './searchPage/SearchContainer';
import Header from './Header';

const App = () => {
  const [ user ] = useState({});

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
