import React from 'react'
import styled from 'styled-components'
import { device } from '../../constants/breakpoints';
import { Layout } from '../../components/Layout';
import { Cookie } from './Cookie';

export const CookiePolicy = () => {
  return (
    <Layout>
      <CookieView>
        <Cookie />
      </CookieView>
    </Layout>
  )
}

const CookieView = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;