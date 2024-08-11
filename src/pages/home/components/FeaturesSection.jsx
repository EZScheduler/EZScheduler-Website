import React from "react";
import styled from "styled-components";
import Hand from "../../../assets/images/hand.png";
import Purple from "../../../assets/images/ez-purple.png";
import { device } from "../../../constants/breakpoints";

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
      {/* <div className="bottom-info">
        <div className="rectangle">
          <p>
            EZ Scheduler is designed for managers who juggle multiple
            responsibilities and need a reliable tool to manage their workforce
            efficiently. Whether you're overseeing a small team or a large
            department, our software adapts to your needs, helping you save time
            and boost productivity.
          </p>
        </div>
      </div> */}
    </FeaturesView>
  );
};

const FeaturesView = styled.div`
  padding: 5rem 0;
  margin-top: 2rem;
  border-radius: 40px 40px 0 0;
  background-image: url("https://res.cloudinary.com/doi40g1ct/image/upload/v1722812293/EZ-Scheduler/feature-bg_zx7jpi.png");
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
    padding: 4rem 6rem;
    justify-content: center;

    .rectangle {
      border-radius: 40px 40px 0 0;
      padding: 5rem 0;
      background-image: url("https://res.cloudinary.com/doi40g1ct/image/upload/v1723411430/EZ-Scheduler/bg-blur_ig76tj.png");
      background-size: cover;
    }
  }
`;
