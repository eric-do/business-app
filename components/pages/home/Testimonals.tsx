import { Box, Text, Stack, Flex } from '@chakra-ui/react';
import { testimonials } from './assets';

const Testimonials = () => {
  return (
    <Stack
      direction={{
        base: 'column',
        md: 'row',
      }}
      spacing={7}
      justifyContent='space-between'
    >
      {testimonials.map((testimonial) => (
        <Box
          key={testimonial.feedback}
          w={{
            base: '100%',
            md: '30%',
          }}
        >
          <Flex
            justifyContent='flex-start'
            direction='column'
          >
            <Text
              mb={3}
              as='em'
              fontSize='lg'
            >
              {testimonial.feedback}
            </Text>
            <Text
              as='strong'
              fontSize='lg'
            >
              - {testimonial.name}
            </Text>
          </Flex>
        </Box>
      ))}
    </Stack>
  );
};

export default Testimonials;
