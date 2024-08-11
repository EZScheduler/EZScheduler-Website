import React from 'react'
import { Layout } from '../../components/Layout'
import { HeroSection } from './components/HeroSection'
import { NavBar } from '../../components/NavBar'
import styled from 'styled-components'
import { StruggleSection } from './components/StruggleSection'
import { FeaturesSection } from './components/FeaturesSection'
import { device } from '../../constants/breakpoints'

export const Home = () => {
  return (
    <Layout>
      <HomeView>
        <HeroSection />
        <StruggleSection />
        <FeaturesSection />
      </HomeView>
    </Layout>
  )
}

const HomeView = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;