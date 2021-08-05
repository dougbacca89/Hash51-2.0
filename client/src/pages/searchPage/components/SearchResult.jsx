import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Image,
  SimpleGrid,
  Flex,
  Heading,
} from '@chakra-ui/react';

import { EvidenceContext } from '../../../contexts/EvidenceContext';

const SearchResult = () => {
  const {
    searchResults,
    fetchImage,
    // eslint-disable-next-line camelcase
    setNasa_id,
    setNasaTitle,
    setKeywords,
    setVideoDescription,
    setVideoId,
    setVideoThumbnail,
    setVideoTitle,
    setVideoUrl,
  } = useContext(EvidenceContext);

  const handleCLick = (result) => {
    const {
      // eslint-disable-next-line camelcase
      nasa_id,
      title,
      keywords,
      videoDescription,
      videoId, videoThumbnail,
      videoTitle,
      videoUrl,
    } = result;
    // eslint-disable-next-line camelcase
    if (nasa_id) {
      setNasa_id(nasa_id);
      setNasaTitle(title);
      setKeywords(keywords);
      fetchImage(nasa_id);
    } else {
      setVideoDescription(videoDescription);
      setVideoId(videoId);
      setVideoThumbnail(videoThumbnail);
      setVideoTitle(videoTitle);
      setVideoUrl(videoUrl);
      fetchImage(videoThumbnail);
    }
  };

  return searchResults.length ?
    (
      <Flex
        pt="20px"
      >
        <SimpleGrid columns={4} spacing={10}>
          { console.log('searchResults: ', searchResults)}
          {
            searchResults.map((result) => (
            // eslint-disable-next-line react/no-array-index-key
              <div key={result.nasa_id ? result.nasa_id : result.videoId}>
                <Link to={`story/${result.nasa_id ? result.nasa_id : result.videoId}`}>
                  <Image
                    m={1}
                    borderRadius="50px"
                    boxSize="300px"
                    objectFit="cover"
                    src={result.thumb ? result.thumb : result.thumbnail}
                    onClick={() => handleCLick(result)}
                    boxShadow="2xl"
                  />
                </Link>
              </div>
            ))
          }
        </SimpleGrid>
      </Flex>
    ) : <Heading color="green.500" size="md" m={2}>Search for the truth...</Heading>;
};

export default SearchResult;
