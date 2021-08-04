/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import {
  Flex,
  Heading,
  Link,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { isLoggedIn, localLogout } = useContext(UserContext);

  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#201830", "#4a3770");
  const textColor = useColorModeValue("green.500", "green.300");
  
  return (
    <div>
      <Flex
        justify="space-between"
        borderBottom="1px"
        bg={bg}
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
            <Link
            variant="ghost"
            ml="2vw"
            color={textColor}
            onClick={toggleColorMode}
          >
            Toggle Colors
          </Link> {" "} 

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
