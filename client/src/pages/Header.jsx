import React, { useContext } from "react";

import {
  Flex,
  Heading,
  Link,
  Box,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

import { UserContext } from "../contexts/UserContext";


const Header = () => {


  const { toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("green.500", "green.300");
  const bg = useColorModeValue("#3a2a5e", "#543d8a");
  const header = useColorModeValue("#201830", "#34274f");
  const boxColor = useColorModeValue("gray.800" , "gray.700");




  const { isLoggedIn, localLogout } = useContext(UserContext);
  return (
    <div>
      <Flex
        justify="space-between"
        borderBottom="1px"
        bg={header}
        p={1}
      >
      <Link href="/">
        <Heading
          as="h3"
          size="lg"
          m={1}
          color={textColor}
          ml="14.5vw"
        >
          Hash#51
        </Heading>
      </Link>
        <Heading
          as="h3"
          size="md"
          m={2}
          mr="15vw"
        >
          <Link
            color={textColor}
            href="/search"
          >
            Get evidence
          </Link> {" "}
          <Link
            color={textColor}
            ml="2vw"
            href="/userPage"
          >
            Conspiracies
          </Link> {" "}
          {// eslint-disable-next-line anchor-is-valid
          }
          <Link
          onClick={toggleColorMode}
          color={textColor}
          >
            Toggle Color
          </Link> 
          { isLoggedIn ?
            (<Link
              color={textColor}
              ml="2vw"
              href="/userLogin"
              onClick={ localLogout }
            >
              Log Out
            </Link>) :
            (<Link
              color={textColor}
              ml="2vw"
              href="/userLogin"
            >
              Join us
            </Link>)
          }

        </Heading>
      </Flex>
      <Box
        width="full"
        height="4px"
        bg="black"
      />
    </div>
  );
};

export default Header;
