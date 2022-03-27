import { extendTheme } from "@chakra-ui/react";
import Button from './components/button';
import Input from './components/input';
import Textarea from './components/textarea';

const overrides = {
  components: {
    Button,
    Input,
    Textarea
  }
}

export default extendTheme(overrides);