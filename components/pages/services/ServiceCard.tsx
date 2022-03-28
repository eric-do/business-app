import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { Link } from '@/components/ui';

interface CardProps {
  title: string;
  price: string;
  duration?: string;
}
const ServiceCard = ({ title, price, duration }: CardProps) => {
  return (
    <Box
      layerStyle='with-shadow'
      w={{
        base: '100%',
        md: 300,
      }}
      minW={{
        base: '100%',
        md: 250
      }}
      p={3}
    >
      <Link src='/contact'>
        <VStack alignItems='flex-start'>
          <Text fontWeight={700}>{title}</Text>
          <Text fontWeight={400}>Duration: {duration}</Text>
          <Text>{price}</Text>
        </VStack>
      </Link>
    </Box>
  );
};

export default ServiceCard;
