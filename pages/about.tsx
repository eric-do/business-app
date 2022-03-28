import React from 'react';
import { Box, Divider, Text, Center, Image, VStack } from '@chakra-ui/react';
import { DesktopConsultation, MobileConsultation } from '@/components/pages/home';
import { SectionTitle, StatsList } from '@/components/pages/about';

const stats = [
  {
    unit: 'Software Engineers trained',
    stat: '300+',
  },
  {
    unit: 'Years teaching bootcamp',
    stat: '3',
  },
  {
    unit: 'Some other stat',
    stat: '400',
  },
  {
    unit: 'Another stat',
    stat: '600',
  },
];

const About = () => {
  return (
    <VStack w='100%'>
      <VStack
        spacing={10}
        p={0}
        mt={'10'}
        px={{
          base: 0,
          md: '20%',
        }}
      >
        <VStack
          w='100%'
          alignItems={'flex-start'}
          spacing={5}
        >
          <SectionTitle title='A passion for technical growth' />
          <Text fontSize='2xl'>
            Hi, I&apos;m <strong>Eric</strong>. I teach at Hack Reactor and have
            launched the careers of <strong>over 300 students</strong>.
          </Text>
          <Box
            display={{
              base: 'none',
              md: 'flex'
            }}
            w={{
              md: '50%',
            }}
            px={0}
          >
            <DesktopConsultation />
          </Box>
          <Divider />
          <Box
            display={{
              base: 'flex',
              md: 'none'
            }}
            w='100%'
            px={0}
          >
            <MobileConsultation />
          </Box>
        </VStack>
        <VStack
          w='100%'
          alignItems={'flex-start'}
          spacing={5}
        >
          <SectionTitle title='My goal' />
          <Text fontSize='2xl'>
            Make software engineering accessible to <strong>everyone</strong> by
            teaching in a hands-on environment with focus on{' '}
            <strong>strong mental models</strong>.
          </Text>
        </VStack>
        <Divider />
        <VStack
          w='100%'
          alignItems={'flex-start'}
        >
          <SectionTitle title='By the numbers' />
        </VStack>
        <Center>
          <StatsList stats={stats} />
        </Center>
      </VStack>
    </VStack>
  );
};

export default About;
