import styled from "styled-components"
import logo from '../assets/images/Logo.webp';
import { device } from "../constants/breakpoints";

export const Logo = () => {
  return (
    <LogoView>
      <img src={logo} alt="EZ Logo" />
    </LogoView>
  )
}

const LogoView = styled.div`
  /* width: ; */
  height: 25px;

  @media ${device.mobile} {
    height: 19px;
  }

  img {
    width: 100%;
    height: 100%;

    /* @media ${device.mobile} {
      width: 100%;
      height: 100%;
    } */
  }
`;