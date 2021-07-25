/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';


const GoogleButton = () => {
  const { googleLogin } = useContext(UserContext);
  return (
  <a href='auth/google'>
  {/* <button type='button' onClick={ googleLogin }> */}
    Sign In With Google
  {/* </button> */}
  </a>
    );
};

export default GoogleButton;
