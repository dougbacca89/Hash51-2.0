import React, { useState } from 'react';

import LoginContainer from './LoginContainer.jsx';
import StoryContainer from './StoryContainer.jsx';
import SearchContainer from './SearchContainer.jsx';

const App = () => {

  const[view, setView] = useState('login');
  const[user, setUser] = useState(null);
 
  return (
    <div>
      {user === null ?
        <LoginContainer /> :
        <StoryContainer />
      }
    </div>
  );
};

export default App;
