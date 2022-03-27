import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack
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
    <Box>
      <VStack>
        <Heading
          as='h1'
          size='xl'
        >
          Services
        </Heading>
        {services.map(service => (
          <VStack
            justifyContent={'center'}
            key={service.title}
            py={5}
            px={5}
          >
            <Heading
              as='h2'
              size='lg'
            >
              {service.title}
            </Heading>
            <Text>
              {service.description}
            </Text>
          </VStack>
        ))}
      </VStack>
    </Box>
  )
}

export default Services;