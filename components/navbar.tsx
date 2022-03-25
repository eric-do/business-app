import React from 'react';
import { Box, Text, Center, HStack, Link } from '@chakra-ui/react';
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

const Navbar = () => {
  return (
    <Center>
      <HStack>
        {
          pages.map(p => (
            <NextLink
              href={p.url}
              key={p.url}
              passHref
            >
              <Link>
                { p.title }
              </Link>
            </NextLink>
          ))
        }
      </HStack>
    </Center>
  )
};

export default Navbar;