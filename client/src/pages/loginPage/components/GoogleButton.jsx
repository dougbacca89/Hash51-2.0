import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';


const GoogleButton = () => {
  const { googleLogin } = useContext(UserContext);
  return (
  <button type='button' onClick={ googleLogin }>
    Sign In With Google
  </button>
    );
};

export default GoogleButton;
