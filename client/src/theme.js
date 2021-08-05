import {extendTheme} from '@chakra-ui/react';

const myNewTheme = extendTheme({
  colors: {
      palette1 :{
      primary: "#845EC2",
      textColor: "#FF6F91",
      highlight: "#00C9A7",
      warning: "#FFC75F",
      danger: "#C34A36",
      useSystemColorMode: false,
    },
    
    palette2: {
      primary: "#000000",
      textColor: "#FFFFFF",
      highlight: "#666666",
      warning: "#67835F",
      danger: "#CCCABC",
      useSystemColorMode: false,
    }
  }
});

export default myNewTheme;

