import React from 'react'
import { Layout } from '../../components/Layout'
import { ContactSection } from './components/ContactSection'
import styled from 'styled-components'
import { device } from '../../constants/breakpoints'

export const Contact = () => {
  return (
    <Layout>
      <ContactView>
        <ContactSection />
      </ContactView>
    </Layout>
  )
}

const ContactView = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;