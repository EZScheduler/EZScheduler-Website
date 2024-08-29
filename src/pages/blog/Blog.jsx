import React from 'react'
import { Layout } from '../../components/Layout'
import { HeroSection } from './HeroSection'
import styled from 'styled-components'
import { device } from '../../constants/breakpoints'

export const Blog = () => {
  return (
    <Layout>
      <BlogsView>
        <HeroSection />
      </BlogsView>
    </Layout>
  )
}

const BlogsView = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;