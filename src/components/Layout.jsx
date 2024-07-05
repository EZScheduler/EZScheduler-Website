import React from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <View>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </View>
  )
}

const View = styled.div`
  width: 100vw;
  height: 100vh;
`;