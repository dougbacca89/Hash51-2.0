import React, {useContext} from 'react';
import { Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { EvidenceContext } from '../../../contexts/EvidenceContext';

const SearchResult = () => {
  const { searchResults } = useContext(EvidenceContext);

  return searchResults.length ?
  (
    <SimpleGrid columns={4} spacing={10}>
      { searchResults.map(result => (
        <div>
          <Link to={`story/${result.nasa_id}`}>
            <Image
              borderRadius="full"
              boxSize="300px"
              src={result.thumb}
              alt={result.title}
            />
          </Link>
        </div>
        )
      )
    }
    </SimpleGrid>
  ) : <div>Results</div>;
};
export default SearchResult;
