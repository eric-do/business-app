import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Box,
  Heading,
  Text,
  Center
} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <Center>
        <Heading>Professional Web Development</Heading>
      </Center>
    </Box>
  )
}

export default Home
