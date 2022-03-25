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
  VStack,
  useDisclosure,
  IconButton,
  Collapse
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Link } from '@/components/ui'

export const NAV_ITEMS = [
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
        justifyContent='space-between'
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <DesktopNav />
        <Button colorScheme={'blue'}>{contact}</Button>
      </Flex>
      <VStack>
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
          variant='ghost'
          aria-label='Toggle navigation'
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
        />
      </Flex>
      <Collapse
        in={isOpen}
        animateOpacity
      >
        <MobileNav />
      </Collapse>
      </VStack>
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
      {NAV_ITEMS.map((p) => (
        <Link src={p.url} key={p.url}>
          <Text fontSize={'lg'}>{p.title}</Text>
        </Link>
      ))}
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <VStack
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <Link
         src={navItem.url}
         key={navItem.url}
        >
          <Box>
            {navItem.title}
          </Box>
        </Link>
      ))}
    </VStack>
  )
}

export default Navbar;
