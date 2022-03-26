import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Box,
  Heading,
  Text,
  VStack,
  Center,
  Divider
} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <VStack
        alignItems='flex-start'
        p={4}
      >
      <Heading
        as='h1'
        fontSize={'3xl'}
        textTransform={'uppercase'}
      >
        Professional Web Development
      </Heading>
      <Heading
        as='h2'
        fontSize={'2xl'}
        fontWeight={400}
        textTransform={'uppercase'}
      >
        Focus on your business.
      </Heading>
      <Divider
        colorScheme={'red'}
      />
      </VStack>
    </Box>
  )
}

export default Home
