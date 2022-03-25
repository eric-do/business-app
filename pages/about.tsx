import React from 'react';
import {
  Box,
  Heading,
  Text,
  Center,
  Image,
  VStack
} from '@chakra-ui/react';
// import { Image } from '@/components/ui';

const About = () => {
  return (
    <Box>
      <Center>
        <VStack>
        <Heading>
          About Us
        </Heading>
        <Image
          boxSize='200px'
          src={'https://res.cloudinary.com/dngetymia/image/upload/v1648187630/business-app/profile_eibjrm.jpg'}
          alt='Picture of the founder'
        />
        </VStack>
      </Center>
    </Box>
  )
}

export default About;