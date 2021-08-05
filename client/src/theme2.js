import {extendTheme} from '@chakra-ui/react';

const myNewTheme2 = extendTheme({
  
  colors: {
    primary: "#000000",
    textColor: "#FFFFFF",
    highlight: "#666666",
    warning: "#67835F",
    danger: "#CCCABC",
    useSystemColorMode: false,
  }
});

export default myNewTheme2;
