import React from 'react';
import { Box, Flex, Text, Heading, VStack, Center } from '@chakra-ui/react';
import { Accordion, SectionContainer } from '@/components/pages/education';
import { courses } from '@/assets/education';

const Education = () => {
  return (
    <VStack
      w='100%'
      spacing={8}
      px={{
        base: 0,
        md: '20%',
      }}
    >
      {courses.map((course) => (
        <SectionContainer
          key={course.title}
          title={course.title}
        >
          {course.schedule.map(({ title, description }) => (
            <Accordion
              key={title}
              title={title}
              description={description}
            />
          ))}
        </SectionContainer>
      ))}
    </VStack>
  );
};

export default Education;
