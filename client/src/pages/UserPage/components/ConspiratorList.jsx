import React, { useContext, useState, useEffect } from 'react';

import {
  Stack,
  StackDivider,
} from '@chakra-ui/react';

import Conspirator from './Conspirator';
import { UserContext } from '../../../contexts/UserContext';

const ConspiratorList = () => {
  const { conspirators, usersInChat } = useContext(UserContext);
  useEffect(() => {
  }, [conspirators]);
  return (
    <Stack
      float="right"
      mt={4}
      h="43vh"
      w="17vh"
      overflowY="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: '16px',
          borderRadius: '8px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {/* eslint-disable-next-line no-underscore-dangle */}
      {conspirators.map((conspirator) => (<Conspirator isInChat={usersInChat} key={conspirator._id} conspirator={conspirator} />))}
    </Stack>

  );
};

export default ConspiratorList;
