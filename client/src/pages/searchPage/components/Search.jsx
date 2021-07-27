import React, {useContext, useState} from 'react';

import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Flex
} from "@chakra-ui/react";

import { EvidenceContext } from '../../../contexts/EvidenceContext';

const Search = () => {
  const { fetchSearch } = useContext(EvidenceContext);
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
  // <div>
  //   <h1>search</h1>
  //   <button type='button' onClick={fetchSearch}>Search</button>
  // </div>);
    <Flex
      w="25vw"
      bg="white"
      borderRadius={5}
    >
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          value={value}
          onChange={handleChange}
        />
        <InputRightElement width="4.5rem">
          <Button 
            h="1.75rem" 
            size="sm" 
            onClick={() => fetchSearch(value)}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};


export default Search;
