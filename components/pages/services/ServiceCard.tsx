import React from 'react';
import {
  Box,
  VStack,
  Text
} from '@chakra-ui/react';
import { Link } from '@/components/ui'

interface CardProps {
  title: string;
  price: string;
  duration?: string;
}
const ServiceCard = ({ title, price, duration }: CardProps) => {
  return (
    <Link src='/contact'>
    <Box
      layerStyle='with-shadow'
      w={250}
      p={3}
    >
      <VStack
        alignItems='flex-start'
      >
        <Text
          fontWeight={700}
        >
          {title}
        </Text>
        <Text
          fontWeight={400}
        >
          Duration: {duration}
        </Text>
        <Text
        >
          {price}
        </Text>
      </VStack>
    </Box>
    </Link>
  )
};

export default ServiceCard;