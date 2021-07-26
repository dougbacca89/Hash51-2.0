import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Login from './components/Login';
import CreateUser from './components/CreateUser';
import GoogleButton from './components/GoogleButton';

const LoginContainer = (props) => {
  const { updateUserClick } = props;
  const [ view, setView ] = useState('login');

  const createUserClick = () => {
    setView('createUser');
  };

  return (
    <div>
      {
        view === 'login' ?
        <div>
        <Login createUserClick={createUserClick}/>
        <GoogleButton />
        </div> :
        <CreateUser updateUserClick={updateUserClick}/>
      }
    </div>
  );
};

LoginContainer.propTypes = {
  updateUserClick: PropTypes.func.isRequired
  // updateUserClick: PropTypes.func
};

export default LoginContainer;
