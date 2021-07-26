import React, {useContext, useState} from 'react';
import { EvidenceContext } from '../../../contexts/EvidenceContext';

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/react";

const Search = () => {
  const { fetchSearch } = useContext(EvidenceContext);
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
  // <div>
  //   <h1>search</h1>
  //   <button type='button' onClick={fetchSearch}>Search</button>
  // </div>);
  <InputGroup size="md">
  <Input
    pr="4.5rem"
    value={value}
    onChange={handleChange}
  />
  <InputRightElement width="4.5rem">
    <Button h="1.75rem" size="sm" onClick={() => fetchSearch(value)}>
      Search
    </Button>
  </InputRightElement>
</InputGroup>
  );
};


export default Search;
