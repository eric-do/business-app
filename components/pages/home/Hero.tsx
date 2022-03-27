import type { NextPage } from 'next';
import {
  Heading,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <VStack
      alignItems='flex-start'
      spacing={{
        base: 5,
        md: 10
      }}
      pt={{
        base: 0,
        md: 10
      }}
    >
      <Heading
        as='h1'
        ml={{
          base: 0,
          md: '30%! important'
        }}
        fontSize={{
          base: '3xl',
          md: '6xl'
        }}
        textTransform={'uppercase'}
      >
        Professional Web Development
      </Heading>
      <Heading
        as='h2'
        ml={{
          base: 0,
          md: '10% !important'
        }}
        fontSize={{
          base: '3xl',
          md: '6xl'
        }}
        fontWeight={400}
        textTransform={'uppercase'}
      >
        Level up your tech stack.
      </Heading>
      <Divider colorScheme={'red'} />
      <Text
        ml={{
          base: 0,
          md: '55% !important'
        }}
        fontSize={{
          md: '2xl'
        }}
        w={{
          base: '100%',
          md: '43%'
        }}
      >
        <strong>
          {`Over 300 hundred software engineers
          trained in modern fullstack app development. `}
        </strong>
        Empower your workforce today.
      </Text>
    </VStack>
  );
};

export default Hero;
