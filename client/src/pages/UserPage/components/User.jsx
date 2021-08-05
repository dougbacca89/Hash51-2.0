import React, { useContext } from 'react';

import {
  Text,
  Box,
  Image,
  useColorModeValue
} from "@chakra-ui/react";

import { UserContext } from '../../../contexts/UserContext';


const User = () => {
  const { userObj } = useContext(UserContext);
  const { username, profileImage } = userObj;

  const textColor = useColorModeValue("green.500", "green.300");
  const bg = useColorModeValue("#3a2a5e", "#543d8a");
  const header = useColorModeValue("#201830", "#34274f");
  const boxColor = useColorModeValue("gray.800" , "gray.700");
  const whiteColor = useColorModeValue("whiteAlpha.900" , "blackAlpha.900");
  const greyColor = useColorModeValue("gray.600" , "gray.300");



  return (
    <Box
      bg={greyColor}
      mb="1px"
      w="10vw"
      borderRadius={10}
    >
      <Image
        bg="purple.100"
        w="10vw"
        h="10vw"
        borderTopRadius={10}
        objectFit="cover"
        src={profileImage}
      />
      <Text
        ml="10px"
        fontSize="12px"
        color={textColor}
      >
        {username}
      </Text>
    </Box>
  );
};

export default User;
