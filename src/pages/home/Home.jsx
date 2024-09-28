import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { HeroSection } from "./components/HeroSection";
import styled from "styled-components";
import { StruggleSection } from "./components/StruggleSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { device } from "../../constants/breakpoints";
import Loader from "../../components/Loader";

export const Home = () => {
  const [showLoader, setShowLoader] = useState(() => {
    return sessionStorage.getItem("showLoader") !== "false";
  });

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (showLoader) {
      disableScroll();
      const timer = setTimeout(() => {
        enableScroll();
        sessionStorage.setItem("showLoader", "false");
        setShowLoader(false);
      }, 6000);

      return () => clearTimeout(timer);
    } else {
      enableScroll();
    }
  }, [showLoader]);

  return (
    <Layout>
      {showLoader && <Loader />}
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
