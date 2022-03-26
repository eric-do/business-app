import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Box,
  Heading,
  Text,
  VStack,
  Center,
  Divider,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <VStack
        alignItems='flex-start'
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
        <Divider colorScheme={'red'} />
        <Text>
          <strong>
            {`Over 300 hundred software engineers
            trained in modern fullstack app development. `}
          </strong>
          Empower your workforce today.
        </Text>
      </VStack>
      <VStack py={7}>
        <VStack
          spacing={-1}
          w='100%'
        >
          <Input
            py={5}
            bg={'white'}
            borderWidth={3}
            borderColor='black'
            variant={'with-shadow'}
          />
          <Button
            variant={'with-shadow'}
          >
            Request consultation
          </Button>
        </VStack>
      </VStack>
      <VStack
        spacing={6}
        alignItems='flex-start'
      >
        {
          subsections.map(subsection => (
            <VStack
              key={subsection.title}
              spacing={3}
              alignItems='flex-start'
            >
              <Heading
                bgGradient='linear(to-br,#fcc02b, #ff7979 40%, #a33abd 89%)'
                bgClip='text'
                as='h3'
                fontSize='2xl'
              >
                {subsection.title}
              </Heading>
              <Text>
                {subsection.description}
              </Text>
            </VStack>
          ))
        }
      </VStack>
    </Box>
  );
};

const subsections = [
  {
    title: 'Learn modern component design with React',
    description: `Learn how to create React applications
                  and get experience creating thoughtful
                  and testable components.`
  },
  {
    title: 'Write fast dependable server code with Express.js',
    description: `Write safe and reusable code using with input
                  validation and custom middleware.`
  },
]

export default Home;
