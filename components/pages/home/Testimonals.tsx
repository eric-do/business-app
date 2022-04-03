import {
  Box,
  Text,
  Stack,
  VStack,
  Flex
} from '@chakra-ui/react';
import { testimonials } from './assets';

const Testimonials = () => {
  return (
    <Stack
      direction={{
        base: 'column',
        md: 'row'
      }}
      spacing={7}
      justifyContent='space-between'
    >
      {testimonials.map(testimonial => (
        <Box
          key={testimonial.feedback}
          w={{
            base: '100%',
            md: '30%'
          }}
        >
          <Flex
            justifyContent="flex-start"
            direction='column'

          >
            <Text mb={3} as='em'>{testimonial.feedback}</Text>
            <Text as='strong'>- {testimonial.name}</Text>
          </Flex>
        </Box>
      ))}

    </Stack>
  )
}

export default Testimonials;