import styled from "styled-components"
import logo from '../assets/images/Logo.png';

export const Logo = () => {
  return (
    <LogoView>
      <img src={logo} alt="EZ Logo" />
    </LogoView>
  )
}

const LogoView = styled.div`
  width: 121px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
  }
`;