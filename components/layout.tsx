import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default Layout;