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
  IconButton,
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
  const { isOpen, onToggle } = useDisclosure();
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
        flex={{ base: 1, md: 'auto' }}
        justifyContent='flex-end'
        display={{
          base: 'flex',
          md: 'none'
        }}
      >
        <IconButton
          onClick={onToggle}
          aria-label='Toggle navigation'
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
        />
      </Flex>
      <Flex
        justifyContent='space-between'
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <DesktopNav />
        <Button colorScheme={'blue'}>{contact}</Button>
      </Flex>
    </Flex>
  );
};

const DesktopNav = () => {
  return (
    <HStack
      spacing={14}
      justifyContent={'space-between'}
      px={14}
    >
      {pages.map((p) => (
        <Link src={p.url} key={p.url}>
          <Text fontSize={'lg'}>{p.title}</Text>
        </Link>
      ))}
    </HStack>
  );
};

export default Navbar;
