import React, { ReactNode, FunctionComponent } from 'react';
import {
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const NextChakraLink: FunctionComponent<{src: string}> = ({
  children,
  src
}) => {
  return (
    <NextLink
      href={src}
      passHref
    >
      <Link>
        { children }
      </Link>
    </NextLink>
  )
};

export default NextChakraLink;