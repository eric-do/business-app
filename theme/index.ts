import { extendTheme } from "@chakra-ui/react";
import Button from './components/button';
import Input from './components/input';
import Textarea from './components/textarea';
import Accordion from './components/accordion';
import layerStyles from './foundations/layers';

const overrides = {
  layerStyles,
  components: {
    Button,
    Input,
    Textarea,
    Accordion,
  }
}

export default extendTheme(overrides);