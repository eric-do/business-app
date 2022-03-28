import React from 'react';
import { Box, Flex, Text, Heading, VStack, Center } from '@chakra-ui/react';
import { SectionContainer, ServiceCard } from '@/components/pages/services';
import { services } from '@/assets/services';

const Education = () => {
  return (
    <VStack
      w='100%'
      spacing={14}
      px={{
        base: 0,
        md: '10%',
      }}
    >
      {services.map((service) => (
        <SectionContainer
          key={service.category}
          title={service.category}
        >
          {service.products.map(({ title, duration, price }) => (
            <ServiceCard
              key={title}
              title={title}
              duration={duration}
              price={price}
            />
          ))}
        </SectionContainer>
      ))}
    </VStack>
  );
};

export default Education;
