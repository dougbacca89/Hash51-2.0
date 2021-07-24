/* eslint-disable import/extensions */

import React, { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";


import LoginContainer from './loginPage/LoginContainer.jsx';
import StoryContainer from './storyPage/StoryContainer.jsx';
import SearchContainer from './searchPage/SearchContainer.jsx';


const App = () => {
  const [user, setUser] = useState(null);

  const updateUserClick = (userName) => {
    setUser(userName);

  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginContainer user={user} updateUserClick={updateUserClick}/>
        </Route>
        <Route path="/story">
          <StoryContainer user={user}/>
        </Route>
        <Route path="/search">
          <SearchContainer user={user}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
