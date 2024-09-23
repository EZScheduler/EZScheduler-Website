import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { HeroSection } from "./components/HeroSection";
import styled from "styled-components";
import { StruggleSection } from "./components/StruggleSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { device } from "../../constants/breakpoints";
import Loader from "../../components/Loader";

export const Home = () => {
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    disableScroll();
    const timer = setTimeout(enableScroll, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Loader />
      <HomeView>
        <HeroSection />
        <StruggleSection />
        <FeaturesSection />
      </HomeView>
    </Layout>
  );
};

const HomeView = styled.div`
  padding-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
