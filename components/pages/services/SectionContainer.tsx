import React from 'react';
import {
  Heading,
  VStack,
  HStack
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
      alignItems='flex-start'
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
        display={{ md: 'none' }}
        spacing={5}
        p={0}
        mt={'10'}
        w='100%'
      >
        { children }
      </VStack>
      <HStack
        display={{
          base: 'none',
          md: 'flex'
        }}
        justifyContent='flex-start'
        spacing={5}
        p={0}
        w='100%'
      >
        { children }
      </HStack>
    </VStack>
  )
}

export default SectionContainer;