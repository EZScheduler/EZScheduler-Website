import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Privacy } from "./Privacy";
import { device } from "../../constants/breakpoints";

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <Policy>
        <Privacy />
      </Policy>
    </Layout>
  );
};

const Policy = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
