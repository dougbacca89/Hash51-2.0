import React from 'react';
import PropTypes from 'prop-types';

import {
 VStack,
 StackDivider
} from "@chakra-ui/react";

import Conspirator from './Conspirator';

const ConspiratorList = (props) => {
  const { conspirators } = props;
  
  return (
  <VStack
    divider={<StackDivider borderColor="gray.200" />}
    spacing={1}
    align="stretch"
  >
    <StackDivider borderColor="gray.200" />
    {conspirators.map((conspirator) => <Conspirator conspirator={conspirator} />)}
  </VStack>
  );
};

ConspiratorList.propTypes = {
  conspirators: PropTypes.isRequired,
};

export default ConspiratorList;
