import React from "react";
import styled from "styled-components";
import Hand from "../../../assets/images/hand.webp";
import Purple from "../../../assets/images/ez-purple.webp";
import { device } from "../../../constants/breakpoints";
import Blur from '@/assets/images/blur.webp';
import Sub from '@/assets/images/sub-footer.webp';
import Phonebook from '@/assets/images/phonebook-blur.webp';
import Schedule from '@/assets/images/schedule-blur.webp';

export const FeaturesSection = () => {
  return (
    <FeaturesView>
      <div className="top-info">
        <div className="text">
          <h2>Spend less time scheduling and more time leading</h2>
          <p>
            Making workforce management EZ for managers so they can do more.
          </p>

          <button>Get started</button>
        </div>

        <div className="image-holder">
          <img src={Hand} alt="" className="hand" />
          <img src={Purple} alt="" className="ez-purple" />
        </div>
      </div>
      <div className="bottom-info">
        <div className="rectangle">
          <div className="center">
            <p>
              EZ Scheduler is designed for managers who juggle multiple
              responsibilities and need a reliable tool to manage their workforce
              efficiently. Whether you're overseeing a small team or a large
              department, our software adapts to your needs, helping you save time
              and boost productivity.
            </p>
          </div>
          <div className="image-blur">
            <img src={Sub} alt="" className='sub-footer-img' />
            <img src={Phonebook} alt="" className='phonebook' />
            <img src={Schedule} alt="" className='schedule' />
          </div>

          <img src={Blur} alt="" className='blur' />
        </div>
      </div>
    </FeaturesView>
  );
};

const FeaturesView = styled.div`
  padding: 5rem 0;
  margin-top: 2rem;
  border-radius: 40px 40px 0 0;
  background-image: url("src/assets/images/feature-bg.webp");
  background-size: cover;

  @media ${device.mobile} {
    padding: 2rem;
    border-radius: 20px 20px 0 0;
  }

  .top-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text {
      gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      color: white;

      h2 {
        width: 70%;
        font-size: 75px;
        font-weight: 700;
        line-height: 84px;
        color: ${({ theme }) => theme.colors.blue.blue_30};

        @media ${device.mobile} {
          width: 100%;
          font-size: 35px;
          line-height: 39px;
        }
      }

      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        color: ${({ theme }) => theme.colors.purple.purple_40};

        @media ${device.mobile} {
          font-size: 16px;
          line-height: 24px;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 1.2rem 3.5rem;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        color: ${({ theme }) => theme.colors?.white};
        background-color: ${({ theme }) => theme.colors?.purple.purple_10};
      }
    }

    .image-holder {
      position: relative;

      .ez-purple {
        margin: 0 auto;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 841px;
        height: 518px;

        @media ${device.mobile} {
          width: 270px;
          height: 166px;
        }
      }

      .hand {
        width: 1102px;
        z-index: 100;
        height: 701px;
        position: relative;

        @media ${device.mobile} {
          width: 100%;
          height: 209px;
        }
      }
    }
  }

  .bottom-info {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 4rem 4rem;
    justify-content: center;

    .rectangle {
      border-radius: 40px 40px 0 0;
      padding: 5rem 0;
      background-image: url("src/assets/images/bg-blur.webp");
      background-size: cover;
      position: relative;

      .center {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          width: 70%;
          margin: 0 auto;
          font-size: 24px;
          font-weight: 600;
          line-height: 39px;
          text-align: center;
          color: ${({ theme }) => theme.colors.blue.blue_30};
        }
      }

      .image-blur {
        position: relative;
        padding: 0 3rem;

        .sub-footer-img {
          /* margin: 0 3rem; */
          width: 100%;
          /* width: 1175.43px; */
          z-index: 10;
          position: relative;
          /* height: 5rem; */
        }

        .phonebook {
          width: 250px;
          position: absolute;
          top: 2%;
          left: 0%;
        }

        .schedule {
          width: 210px;
          position: absolute;
          top: 0%;
          right: 0%;
        }
      }


      .blur {
        z-index: 10;
        width: 100%;
        height: 250px;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
      }
    }
  }
`;
