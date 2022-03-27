import {
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <VStack
      alignItems='flex-start'
      spacing={{
        base: 5,
        md: 10
      }}
      mt={{
        base: 0,
        md: 20
      }}
    >
      <Heading
        as='h1'
        ml={{
          base: 0,
          md: '40%! important'
        }}
        fontSize={{
          base: '3xl',
          md: '6xl'
        }}
        w={{
          base: '100%',
          md: '60%'
        }}
        textTransform={'uppercase'}
      >
        Professional Web Development
      </Heading>
      <Heading
        as='h2'
        ml={{
          base: 0,
          md: '5% !important'
        }}
        fontSize={{
          base: '3xl',
          md: '6xl'
        }}
        w={{
          base: '100%',
          md: '40%'
        }}
        fontWeight={400}
        textTransform={'uppercase'}
      >
        Level up your tech stack.
      </Heading>
      <Text
        borderTop={'1px'}
        pt={5}
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
