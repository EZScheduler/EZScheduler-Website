import React from 'react'
import styled from 'styled-components';
import { NavBar } from '../../components/NavBar';

export const HeroSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$0',
      features: [
        'Unlimited Access',
        'No Fees',
        'Cancel Anytime'
      ],
    }
  ];

  return (
    <PricingView>
      <NavBar />
      <div className="hero-text">
        <div className="info">
          <h2 className='title'>
            Find Your Perfect Fit
          </h2>

          <p>
            Choose your plan and start streamlining today!. Check out 
            our affordable solutions for a more productive future.
          </p>
        </div>
      </div>
    </PricingView>
  )
}

const PricingView = styled.div`
  margin-bottom: 19rem;
  padding: 2rem;
  /* padding-bottom: 5rem; */
  /* border-radius: 0 0 60px 60px; */
  /* background: linear-gradient(to right, #47cdd0 20%, #7b68ee 70%, #a76af8 100%); */
  color: ${({ theme }) => theme.colors.white};

  .hero-text {
    .info {
      display: flex;
      padding: 4rem 0;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.blue.blue_10};

      p {
        width: 50%;
        font-size: 18px;
        font-weight: 300;
        line-height: 32px;
        padding: 1rem 0;
        color: ${({ theme }) => theme.colors.blue.blue_10};
        /* background: linear-gradient(to right, #8930FD 0%, #47CDD0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
      }

      .title {
        width: 90%;
        font-size: 74px;
        font-weight: 600;
        line-height: 84px;
        padding: 1rem 0;
        padding-top: 2rem;
      }
    }
  }
`;