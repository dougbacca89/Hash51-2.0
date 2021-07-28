import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { 
  Image, 
  SimpleGrid,
  Flex,
  Heading
} from '@chakra-ui/react';

import { EvidenceContext } from '../../../contexts/EvidenceContext';

const SearchResult = () => {
  const { searchResults, fetchImage, setNasa_id, setHref, setTitle, setKeywords } = useContext(EvidenceContext);

  // eslint-disable-next-line camelcase
  const handleCLick = (result) => {
    const { nasa_id, title, keywords } = result;
    setNasa_id(nasa_id);
    setTitle(title);
    setKeywords(keywords);
    fetchImage(nasa_id);
  };
 

  return searchResults.length ?
  (
    <Flex
      pt="20px"
      
    >
      <SimpleGrid columns={4} spacing={10}>
        { searchResults.map(result => (
          <div>
            <Link to={`story/${result.nasa_id}`}>
              <Image
                m={3}
                borderRadius="full"
                boxSize="300px"
                objectFit="cover"
                src={result.thumb}
                onClick={() => handleCLick(result)}
              />
            </Link>
          </div>
          )
        )
      }
      </SimpleGrid>
    </Flex>
  ) : <Heading color="green.500" size="md" m={2}>Search for the truth...</Heading>;
};
export default SearchResult;
