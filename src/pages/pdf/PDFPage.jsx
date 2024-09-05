import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../components/Layout';
import { device } from '../../constants/breakpoints';
import { PDF } from './PDF';

export const PDFPage = () => {
  return (
    <Layout>
      <PDFView>
        <PDF />
      </PDFView>
    </Layout>
  )
}

const PDFView = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;