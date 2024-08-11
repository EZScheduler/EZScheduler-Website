import styled from "styled-components"
import logo2 from '../assets/images/mobileLogo.png';

export const Logo2 = () => {
  return (
    <LogoView>
      <img src={logo2} alt="EZ Logo" />
    </LogoView>
  )
}

const LogoView = styled.div`
  height: 25px;

  img {
    width: 100%;
    height: 100%;
  }
`;