import React, { useContext } from 'react';

import {
  Text,
  Box,
  Image,
} from '@chakra-ui/react';

import { EvidenceContext } from '../../../contexts/EvidenceContext';
import { UserContext } from '../../../contexts/UserContext';

import PostStory from './PostStory';

const NewStory = () => {
  const { href } = useContext(EvidenceContext);
  const { userObj } = useContext(UserContext);
  let imgOrVid = true;
  if (href.slice(0, 4) === 'http') {
    imgOrVid = false;
  }
  return (
    <div>
      <Box
        bg="gray.800"
        mb=".5vh"
        w="60vw"
        borderTopRadius={10}
      >
        <Text
          ml="10px"
          mb="10px"
          fontSize="25px"
          color="green.500"
        >
          Tell your story
          {' '}
          {userObj.username}
        </Text>
        {imgOrVid ?
          (
            <Image
              src={href}
              objectFit="contain"
              w="60vw"
              h="60vh"
              bg="gray.800"
            />
          ) :
          (
            <iframe
              title="youtubeVideo"
              href={href}
              objectFit="contain"
            />
          )}
        { userObj.username ? (
          <PostStory />
        ) : (
          <div />
        )}

      </Box>
    </div>
  );
};

export default NewStory;
