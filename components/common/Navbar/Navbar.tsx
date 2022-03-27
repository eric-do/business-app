import React from 'react';
import {
  Box,
  Button,
  Flex,
  Spacer,
  Heading,
  Text,
  HStack,
  VStack,
  useDisclosure,
  IconButton,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Link } from '@/components/ui';

export const NAV_ITEMS = [
  {
    title: 'Home',
    url: '/',
  },
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
    <VStack
      position='sticky'
      top={0}
      >
      <Flex
        alignItems={'flex-start'}
        bgColor='white'
        py={4}
        px={{
          base: 4,
          md: 20
        }}
        w='100%'
      >
        <Box>
          <Link src='/'>
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
          <Button
            variant='with-shadow'
          >
            {contact}
          </Button>
        </Flex>
        <VStack>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            justifyContent='flex-end'
            display={{
              base: 'flex',
              md: 'none',
            }}
          >
            <IconButton
              onClick={onToggle}
              variant='ghost'
              aria-label='Toggle navigation'
              icon={
                isOpen ? (
                  <CloseIcon
                    w={3}
                    h={3}
                  />
                ) : (
                  <HamburgerIcon
                    w={5}
                    h={5}
                  />
                )
              }
            />
          </Flex>
        </VStack>
      </Flex>
      <Box w='100%'>
        <Collapse
          in={isOpen}
          animateOpacity
        >
          <MobileNav onToggle={onToggle} />
        </Collapse>
      </Box>
    </VStack>
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
        <Link
          src={p.url}
          key={p.url}
        >
          <Text
            fontSize={'lg'}
            fontWeight={700}
          >
            {p.title}
          </Text>
        </Link>
      ))}
    </HStack>
  );
};

const MobileNav = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <VStack
      pt={0}
      pb={10}
      width={'100%'}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Link
          src={navItem.url}
          key={navItem.url}
        >
          <Box
            textAlign={'center'}
            onClick={onToggle}
            p={1}
          >
            <Text
              fontWeight={700}
            >
              {navItem.title}
            </Text>
          </Box>
        </Link>
      ))}
      <Flex
        justifyContent={'center'}
      >
        <Link
          src='/contact'
        >
          <Button
            alignSelf='center'
            onClick={onToggle}
            variant='with-shadow'
          >
            {contact}
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
};

export default Navbar;
