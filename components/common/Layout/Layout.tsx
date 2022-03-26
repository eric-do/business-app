import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Box
        px={{
          base: 4,
          md: 20
        }}
      >
      <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
