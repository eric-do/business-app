import React, { ReactNode } from 'react';
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
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default Layout;