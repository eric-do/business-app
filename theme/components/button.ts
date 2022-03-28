import { extendTheme } from "@chakra-ui/react";

const theme = {
  baseStyle: {
    width: '100%',
    rounded: 1,
    borderColor: 'black',
    bgColor: 'white',
    borderWidth: 3,
  },
  sizes: {
    md: {}
  },
  variants: {
    'with-shadow': {
      boxShadow: '7px 7px 0px black',
      fontWeight: 700,
      fontSize: 'xl',
    },
    'ghost': {
      borderWidth: 0
    }
  }
}

export default theme;