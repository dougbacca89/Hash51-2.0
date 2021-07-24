import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import LoginContainer from './LoginContainer.jsx';
import StoryContainer from './StoryContainer.jsx';
import SearchContainer from './SearchContainer.jsx';


const App = () => {
  const [user, setUser] = useState(null);

  const updateUserClick = (userName) => {
    setUser(userName);
    
  };

  return (
    <div>
      <Switch> 
        <Route path="/">
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
