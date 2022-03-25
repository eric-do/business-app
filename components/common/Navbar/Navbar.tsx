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
  Link,
  useDisclosure
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon
} from '@chakra-ui/icons';
import NextLink from 'next/link';

export const pages = [
  {
    title: 'Services',
    url: '/services'
  },
  {
    title: 'Careers',
    url: '/careers'
  },
  {
    title: 'About',
    url: '/about'
  },
]

export const brand = 'Brand';
export const contact = 'Contact Us';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      alignItems={'center'}
      p={4}
    >
      <Box>
        <Heading>{ brand }</Heading>
      </Box>
      <Spacer />
      <Flex
        display={{
          base: 'none',
          md: 'flex'
        }}
      >
        <DesktopNav />
      </Flex>
      <Spacer />
      <Box>
        <Button
          colorScheme={'blue'}
        >
          { contact }
        </Button>
      </Box>
      </Flex>

  )
};

const DesktopNav = () => {
  return (
    <HStack
      spacing={14}
      justifyContent={'space-between'}
    >
      {
        pages.map(p => (
          <NextLink
            href={p.url}
            key={p.url}
            passHref
          >
            <Link
            fontSize={'lg'}
            >
              { p.title }
            </Link>
          </NextLink>
        ))
      }
    </HStack>
  )
}

export default Navbar;