import React, {useContext} from 'react';
import { Image } from '@chakra-ui/react';
import { EvidenceContext } from '../../../contexts/EvidenceContext';

const SearchResult = () => {
  const { searchResults } = useContext(EvidenceContext);
  console.log(searchResults);

  return searchResults.length ?
 (
  <div>
  { searchResults.map(result => (
    <Image
  borderRadius="full"
  boxSize="150px"
  src={result.thumb}
  alt={result.title}
/>
  )
  )
}
  </div>
 ) : <div>Results</div>;

};
export default SearchResult;
