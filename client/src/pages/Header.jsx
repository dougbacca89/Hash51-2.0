import React, { useContext } from "react";

import {
  Flex,
  Heading,
  Link,
  Box
} from "@chakra-ui/react";

import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { isLoggedIn, localLogout } = useContext(UserContext);
  return (
    <div>
      <Flex
        justify="space-between"
        borderBottom="1px"
        bg="textColor"
        p={1}
      >
      <Link href="/">
        <Heading
          as="h3"
          size="lg"
          m={1}
          color="danger"
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
            color="danger"
            href="/search"
          >
            Get evidence
          </Link> {" "}
          <Link
            color="danger"
            ml="2vw"
            href="/userPage"
          >
            Conspiracies
          </Link> {" "}

          { isLoggedIn ?
            (<Link
              color="danger"
              ml="2vw"
              href="/userLogin"
              onClick={ localLogout }
            >
              Log Out
            </Link>) :
            (<Link
              color="danger"
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
