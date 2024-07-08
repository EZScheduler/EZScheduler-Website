import React from 'react'
import { Layout } from '../../components/Layout'
import { HeroSection } from './components/HeroSection'
import { NavBar } from '../../components/NavBar'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Layout>
      <HomeView>
        <HeroSection />
      </HomeView>
    </Layout>
  )
}

const HomeView = styled.div`
  
`;