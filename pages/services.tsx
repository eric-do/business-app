import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Center,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';

const services = [
  {
    title: 'Web development',
    description: `Hire us to build or fix your application.
                  We do everything from brand pages to web
                  applications.`
  },
  {
    title: 'Education',
    description: `Many companies are looking to train their
                  developers in modern web frameworks. We
                  do seminars to teach the relevent mental
                  models and best practices.`
  }
]

const Services = () => {

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
          Frontend
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
        {frontendSchedule.map(({ title, description}) => (
          <Accordion
            allowToggle
            key={title}
            w='100%'
            boxShadow='7px 7px 0 black'
            borderWidth='3px'
            borderColor='black'
            bgColor='white'
          >
            <AccordionItem>
              <AccordionButton>
                <Box
                  flex='1'
                  textAlign='left'
                >
                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {description}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

        ))}
      </VStack>
    </VStack>
  )
}

const frontendSchedule = [
  {
    title: 'Sprint 1: React',
    description: ` Week 1 assumes the student has a moderate understanding of Javascript
                  and HTML. There is minimal focus on CSS in this sprint, as the majority
                  of React complexity is focused on data (state) management.`
  },
  {
    title: 'Sprint 2: Test Driven Development',
    description: `Test Driven Development is a crucial skill applicable to any part of the stack,
                  yet absent from many bootcamps and workplaces. Learn how to write safe and maintable
                  code that will save you and your team countless hours in refactors and manual testing.`
  },
  {
    title: 'Sprint 3: Global state management',
    description: `Tools like Redux and React Query will allow you to efficiently manage your data, as
                  well as keep it in sync with any server you interact with. Learn when and how to use
                  the various libraries available.`
  },
  {
    title: 'Sprint 4: Typescript',
    description: `As modern code bases become more complex, using a statically typed lanaguage becomes crucial.
                  Typescript allows you to write your code with confidence.`
  }
]
export default Services;