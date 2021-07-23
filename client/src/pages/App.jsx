import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginContainer from './LoginContainer.jsx';
import StoryContainer from './StoryContainer.jsx';
import SearchContainer from './SearchContainer.jsx';


const App = () => {
  const [user, setUser] = useState(null);

  const updateUserClick = (userName) => {
    setUser(userName);
  }

  return (
    <div>
      <Switch> 
        <Route path="/login">
          <LoginContainer />
        </Route>
        <Route path="/story">
          <StoryContainer />
        </Route>
        <Route path="/search">
          <SearchContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
