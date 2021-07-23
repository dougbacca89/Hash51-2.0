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
      {
        user === null ?
        <LoginContainer user={user} updateUserClick={updateUserClick}/> :
        <StoryContainer user={user}/>
      }
    </div>
  );
};

export default App;
