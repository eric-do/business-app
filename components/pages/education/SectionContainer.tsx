import React from 'react';
import {
  Heading,
  VStack,
} from '@chakra-ui/react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const SectionContainer = ({ children, title }: Props) => {

  return (
    <VStack
      w='100%'
      spacing={5}
    >
      <Heading
          as='h2'
          fontSize={{
            base: '2xl',
            md: '4xl'
          }}
        >
          {title}
      </Heading>
      <VStack
        spacing={-1}
        p={0}
        mt={'10'}
        px={{
          base: 0,
          md: '5%',
        }}
        w='100%'
      >
        { children }
      </VStack>
    </VStack>
  )
}

export default SectionContainer;