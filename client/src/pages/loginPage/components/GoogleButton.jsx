/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

import {
Button,
Link
} from "@chakra-ui/react";

import { UserContext } from '../../../contexts/UserContext';

const GoogleButton = () => {
  const { googleLogin, getUser } = useContext(UserContext);
  return (
    <Link href='auth/google'>
      <Button
        type='button'
        onClick={ getUser }
        borderRadius={10}
        color="white"
        variant="solid"
        colorScheme="purple"
      >
        Sign In With Google
      </Button>
    </Link>
    );
};

export default GoogleButton;
