import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Box,
  VStack,
  Center
} from '@chakra-ui/react';
import {
  Hero,
  SellingPoint,
  DesktopConsultation,
  MobileConsultation
} from '@/components/pages/home'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <MobileConsultation />
      <Center my={10}>
      <DesktopConsultation />
      </Center>
      <VStack
        pt={5}
        spacing={10}
        alignItems='flex-start'
      >
        {
          subsections.map(({title, description}) => (
            <SellingPoint
              key={title}
              title={title}
              description={description}
            />
          ))
        }
      </VStack>
    </Box>
  );
};

const subsections = [
  {
    title: 'Model and implement modern component design',
    description: `Learn how to create React applications
                  and get experience creating thoughtful
                  and testable components.`
  },
  {
    title: 'Write fast dependable server code',
    description: `Leverage middleware to write safe and
                  reusable code for your Express server.`
  },
  {
    title: 'Learn algorithms to get hired',
    description: `Level up your problem solving skills and
                  prepare for tech interviews by learning
                  common algorithm patterns.`
  },
]

export default Home;
