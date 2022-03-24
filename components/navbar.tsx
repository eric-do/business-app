import React from 'react';
import { Box, Text, Center, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const pages = [
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Careers',
    url: '/careers'
  },
  {
    title: 'Products',
    url: '/products'
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