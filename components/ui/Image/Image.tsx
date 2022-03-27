import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import NextImage, { ImageProps} from 'next/image';

export type NextChakraImageProps = Omit<BoxProps, 'as'> & ImageProps;

const Image = ({ src, alt, ...rest }: NextChakraImageProps) => {
  return (
  <Box {...rest}>
    <NextImage
      objectFit='cover'
      layout='fill'
      src={src}
      alt={alt}
    />
  </Box>
  )
}

export default Image;