import { extendTheme } from "@chakra-ui/react";
import Button from './components/button';
import Input from './components/input';

const overrides = {
  components: {
    Button,
    Input
  }
}

export default extendTheme(overrides);