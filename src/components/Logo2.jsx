import styled from "styled-components"
import logo2 from '../assets/images/mobileLogo.webp';
import { device } from "../constants/breakpoints";

export const Logo2 = () => {
  return (
    <LogoView>
      <img src={logo2} alt="EZ Logo" />
    </LogoView>
  )
}

const LogoView = styled.div`
  width: 100%;
  height: 25px;

  @media ${device.mobile} {
    width: 100%;
    height: 19px;
  }

  img {
    max-width: 100%;
    height: 100%;

    // @media ${device.mobile} {
    //   width: 100%;
    //   height: 100%;
    // } 
  }
`;