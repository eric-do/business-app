import { extendTheme } from "@chakra-ui/react";
import Button from './components/button';
import Input from './components/input';
import Textarea from './components/textarea';
import Accordion from './components/accordion';

const overrides = {
  components: {
    Button,
    Input,
    Textarea,
    Accordion
  }
}

export default extendTheme(overrides);