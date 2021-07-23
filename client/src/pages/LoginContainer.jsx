import React, { useState } from 'react';

import Login from './components/Login.jsx';
import CreateUser from './components/CreateUser.jsx';

const LoginContainer = (props) => {
  const { user, setUser, updateUserClick } = props;
  const [ view, setView ] = useState('login');

  const createUserClick = () => {
    setView('createUser')
  }

  return (
    <div>
      {
        view === 'login' ?
        <Login user={user} setUser={setUser} createUserClick={createUserClick}/> :
        <CreateUser user={user} setUser={setUser} updateUserClick={updateUserClick}/>
      }
    </div>
  ); 
};

export default LoginContainer;
