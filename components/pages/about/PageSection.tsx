import React from 'react';
import { Box, Heading, Text, Center, Image, VStack } from '@chakra-ui/react';
import { DesktopConsultation } from '@/components/pages/home';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Heading
      as='h1'
      fontSize={{
        base: '3xl',
        md: '6xl',
      }}
      fontWeight={700}
      w={{
        base: '100%',
        md: '70%',
      }}
    >
      {title}
    </Heading>
  );
};
