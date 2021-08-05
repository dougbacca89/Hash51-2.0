import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { 
  Image, 
  SimpleGrid,
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import { EvidenceContext } from '../../../contexts/EvidenceContext';

const SearchResult = () => {
  // eslint-disable-next-line camelcase
  const { searchResults, fetchImage, setNasa_id, setNasaTitle, setKeywords } = useContext(EvidenceContext);

  const textColor = useColorModeValue("green.500", "green.300");
  const bg = useColorModeValue("#3a2a5e", "#543d8a");
  const header = useColorModeValue("#201830", "#34274f");
  const boxColor = useColorModeValue("gray.800" , "gray.700");
  const whiteColor = useColorModeValue("whiteAlpha.900" , "blackAlpha.900");
  const greyColor = useColorModeValue("gray.600" , "gray.300");

  const handleCLick = (result) => {
    // eslint-disable-next-line camelcase
    const { nasa_id, title, keywords } = result;
    setNasa_id(nasa_id);
    setNasaTitle(title);
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
                m={1}
                borderRadius="50px"
                boxSize="300px"
                objectFit="cover"
                src={result.thumb}
                onClick={() => handleCLick(result)}
                boxShadow="2xl"
              />
            </Link>
          </div>
        ))
      }
      </SimpleGrid>
    </Flex>
  ) : <Heading color={textColor} size="md" m={2}>Search for the truth...</Heading>;
};
export default SearchResult;
