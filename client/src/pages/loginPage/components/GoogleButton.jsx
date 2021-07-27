/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { UserContext } from '../../../contexts/UserContext';


const GoogleButton = () => {
  const { googleLogin } = useContext(UserContext);
  return (
    <a href='auth/google'>
      <Button type='button' onClick={ googleLogin }>
        Sign In With Google
      </Button>
    </a>
    );
};

export default GoogleButton;
