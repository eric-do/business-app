import { extendTheme } from "@chakra-ui/react";

const theme = {
  baseStyle: {
    width: '100%',
    borderRadius: 0,
    rounded: 0,
  },
  sizes: {},
  variants: {
    'with-shadow': {
      borderWidth: '3px',
      borderColor: 'black',
      boxShadow: '7px 7px 0px black'
    }
  }
}

export default theme;