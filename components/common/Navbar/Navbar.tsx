import React from 'react';
import {
  Box,
  Button,
  Flex,
  Spacer,
  Heading,
  Text,
  Center,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Link } from '@/components/ui'

export const pages = [
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Careers',
    url: '/careers',
  },
  {
    title: 'About',
    url: '/about',
  },
];

export const brand = 'Brand';
export const contact = 'Contact Us';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex alignItems={'center'} p={4}>
      <Box>
        <Link
          src='/'
        >
          <Heading>{brand}</Heading>
        </Link>
      </Box>
      <Spacer />
      <Flex
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <DesktopNav />
      </Flex>
      <Spacer />
      <Box>
        <Button colorScheme={'blue'}>{contact}</Button>
      </Box>
    </Flex>
  );
};

const DesktopNav = () => {
  return (
    <HStack spacing={14} justifyContent={'space-between'}>
      {pages.map((p) => (
        <Link src={p.url} key={p.url}>
          <Text fontSize={'lg'}>{p.title}</Text>
        </Link>
      ))}
    </HStack>
  );
};

export default Navbar;
