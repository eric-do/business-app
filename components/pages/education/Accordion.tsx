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

const CustomAccordion = ({ title, description }: {
  title: string;
  description: string;
}) => {

  return (
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
  )
}
export default CustomAccordion;