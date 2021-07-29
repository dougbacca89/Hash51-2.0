import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
 VStack,
 StackDivider
} from "@chakra-ui/react";

import Conspirator from './Conspirator';
import { UserContext } from '../../../contexts/UserContext';

const ConspiratorList = () => {
  const { conspirators } = useContext(UserContext);
  console.log(conspirators)

  
  return (
  <VStack
    divider={<StackDivider borderColor="green.500" />}
    spacing={2}
    
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
