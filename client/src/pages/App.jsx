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


import LoginContainer from './loginPage/LoginContainer.jsx';
import StoryContainer from './storyPage/StoryContainer.jsx';
import SearchContainer from './searchPage/SearchContainer.jsx';
import Header from './Header.jsx';

const testStory = {
  userName: "Bobby",
  storyTitle: "They're out there",
  proof: "html",
  comments: [{text: "Fake news", userName: 'Bill'},{text: "The truth is out there!!!", userName: 'Connie'}]
};

const testUser = {
  userName: 'Bobby',
  conspiracies: [testStory,testStory,testStory],
  conspirators: [{userName:"Dale"},{userName: "Joseph"},{userName: "Hank"},{userName: "Connie"},{userName: "Bill"}]
};

const App = () => {
  const [user] = useState(testUser);

  return (
    <div>
      <Header />
      <Flex
        flexDirection="column"
        width="100wh"
        minH="91vh"
        backgroundColor="#3a2a5e"
        justifyContent="top"
        alignItems="center"
        pt="20px"
      >
        <Switch>
          <Route exact path="/">
            <StoryContainer user={user}/>
          </Route>
          <Route exact path="/login">
            <LoginContainer user={user} />
          </Route>
          <Route exact path="/story/:nasa_id">
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

export default App;
