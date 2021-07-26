import React, {useContext} from 'react';
import { EvidenceContext } from '../../../contexts/EvidenceContext';

const SearchResult = () => {
  const { searchResults } = useContext(EvidenceContext);
  console.log(searchResults);
  return (
  <div><h2>results</h2></div>
  );
}
export default SearchResult;
