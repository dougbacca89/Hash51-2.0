/* eslint-disable import/extensions */

import React, { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import {
  Flex,
} from "@chakra-ui/react";


//import LoginContainer from './loginPage/LoginContainer.jsx';
import StoryContainer from './storyPage/StoryContainer.jsx';
import SearchContainer from './searchPage/SearchContainer.jsx';
import Header from './Header.jsx';


const App = () => {
  const [user, setUser] = useState(testUser);

  const updateUserClick = (userName) => {
    setUser(userName);

  };

  return (
    <div>
      <Header />
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="#3a2a5e"
        justifyContent="top"
        alignItems="center"
        pt="20px"
      >
        <Switch>
          <Route exact path="/">
          <StoryContainer user={user}/>
          {/* <LoginContainer user={user} updateUserClick={updateUserClick}/> */}
          </Route>
          <Route path="/story">
            <StoryContainer user={user} />
          </Route>
          <Route path="/search">
            <SearchContainer user={user}/>
          </Route>
        </Switch>
      </Flex>
    </div>
  );
};

const testUser = {
  userName: 'Bobby',
  conspiracies: [{},{},{}],
  conspirators: [{userName:"Dale"},{userName: "Joseph"},{userName: "Hank"},{userName: "Connie"},{userName: "Bill"}]
};

export default App;
