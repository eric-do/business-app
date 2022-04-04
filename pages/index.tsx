import type { NextPage } from 'next';
import { Box, VStack, Center, Heading } from '@chakra-ui/react';
import {
  Hero,
  SellingPoint,
  DesktopConsultation,
  MobileConsultation,
  Testimonials,
} from '@/components/pages/home';

const Home: NextPage = () => {
  return (
    <VStack spacing={{
      base: 8,
      md: 14
    }}>
      <Hero />
      <Center
        display={{
          base: 'flex',
          md: 'none',
        }}
        w='100%'
        my={10}
      >
        <MobileConsultation />
      </Center>
      <Center
        display={{
          base: 'none',
          md: 'flex',
        }}
        my={10}
      >
        <DesktopConsultation />
      </Center>
      <Testimonials />
      <Heading
        as='h2'
        size='xl'
        alignSelf={'flex-start'}
      >
        Students learn to
      </Heading>
      <VStack
        pt={{
          base: 0,
          md: 5,
        }}
        pl={0}
        spacing={10}
        alignItems='flex-start'
        alignSelf='flex-start'
      >
        {subsections.map(({ title, description }) => (
          <SellingPoint
            key={title}
            title={title}
            description={description}
          />
        ))}
      </VStack>
    </VStack>
  );
};

const subsections = [
  {
    title: 'Model and implement modern component design',
    description: `Learn how to create React applications
                  and get experience creating thoughtful
                  and testable components.`,
  },
  {
    title: 'Write fast dependable server code',
    description: `Leverage middleware to write safe and
                  reusable code for your Express server.`,
  },
  {
    title: 'Solve algorithms that will get you hired',
    description: `Level up your problem solving skills and
                  prepare for tech interviews by learning
                  common algorithm patterns.`,
  },
];

export default Home;
