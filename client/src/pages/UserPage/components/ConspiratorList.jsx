import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
 VStack,
 StackDivider,
 Box
} from "@chakra-ui/react";

import Conspirator from './Conspirator';
import { UserContext } from '../../../contexts/UserContext';

const ConspiratorList = () => {
  const { conspirators } = useContext(UserContext);

  return (
    <VStack
      h="63vh"
      w="150px"
      divider={<StackDivider borderColor="green.500" />}
      spacing={2}
      overflowY="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: '16px',
          borderRadius: '8px',
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
      }}
    >
      <StackDivider borderColor="green.500" />
      {/* eslint-disable-next-line no-underscore-dangle */}
      {conspirators.map((conspirator) => <Conspirator key={conspirator._id}conspirator={conspirator} />)}
    </VStack>
  
  );
};

ConspiratorList.propTypes = {
  conspirators: PropTypes.isRequired,
};

export default ConspiratorList;
