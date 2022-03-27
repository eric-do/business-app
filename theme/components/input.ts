import { extendTheme } from "@chakra-ui/react";

const theme = {
  baseStyle: {
    field: {
      width: '100%',
      borderRadius: 0,
      rounded: 0,
    }
  },
  sizes: {
    md: {
      field: {
      }
    }
  },
  variants: {
    'with-shadow': {
      field: {
        boxShadow: '7px 7px 0px black'
      }
    }
  }
}

export default theme;