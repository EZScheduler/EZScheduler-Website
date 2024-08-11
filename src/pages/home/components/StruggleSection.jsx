import React from "react";
import styled from "styled-components";
import Light from "../../../assets/images/light.png";
import Light2 from "../../../assets/images/mobile-ellipse.png";
import Card1 from "../../../assets/images/card1.png";
import Card2 from "../../../assets/images/card2.png";
import Laptop from "../../../assets/images/laptop.png";
import Laptop2 from "../../../assets/images/laptop2.png";
import { ReactSVG } from "react-svg";
import { Icons } from "../../../assets/icons/icons";
import { device } from "../../../constants/breakpoints";

export const StruggleSection = () => {
  return (
    <StruggleView>
      <div className="top">
        <h2>The Struggles of Traditional Scheduling</h2>

        <div className="cards">
          <div className="card1">
            <p>
              As managers, we understand the frustration of spending countless
              hours trying to figure out the best schedule for the period,
              season, week, month, or semester. We've experienced the pain of
              juggling multiple applications, spreadsheets, text messages,
              communication tools, and project management software. That's why
              we created EZ Scheduler - the ultimate solution to streamline all
              your scheduling and productivity needs in one place.
            </p>

            <img src={Card1} alt="" className="img1" />
          </div>
          <div className="card2">
            <p>
              With EZ Scheduler, you can manage your team, schedules, and shifts
              effortlessly from a single dashboard. Create schedules in minutes,
              assign tasks, and ensure compliance with labor laws. Track and
              measure productivity, communicate directly with your team, and
              generate instant reports in various formats. Our intuitive app is
              designed to help you become more efficient, save time, and do more
            </p>

            <img src={Card2} alt="" className="img2" />
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="read-post">
          <h2>Welcome to the </h2>
          {/* <span><ReactSVG src={Icons.ezSide} />side</span> */}

          <p className="description">
            EZ Scheduler is built to make scheduling easy for managers across
            all industries, whether you're in colleges, hospitals, restaurants,
            small businesses, or large corporations.
          </p>

          <div className="actions">
            <button className="filled">Read our story</button>
            <button className="outlined">
              <span>
                <ReactSVG src={Icons.pdf} />
              </span>
              <span>Read our story</span>
            </button>
          </div>
        </div>

        <img src={Light} alt="" className="light" />
        <img src={Light2} alt="" className="light2" />
        <img src={Laptop2} alt="" className="laptop-img" />
      </div>
    </StruggleView>
  );
};

const StruggleView = styled.div`
  /* margin: 0 0 5rem 0; */
  .top {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    @media ${device.mobile} {
      width: 100%;
      margin: 0;
    }

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 84px;
      text-align: center;
      color: ${({ theme }) => theme.colors.blue.blue_30};

      @media ${device.mobile} {
        font-size: 35px;
        line-height: 39px;
      }
    }

    .cards {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 3rem;

      @media ${device.mobile} {
        width: 100%;
        margin-top: 1rem;
        flex-direction: column;
      }

      .card1 {
        width: 50%;
        display: flex;
        flex-direction: column;
        /* gap: 7rem; */
        padding: 2rem 0rem 0 0rem;
        border-radius: 40px;
        /* position: relative; */
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.blue.blue_40};

        @media ${device.mobile} {
          width: 100%;
          /* padding: 2rem 1rem; */
          /* gap: 9rem; */
        }

        p {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          padding: 0 2rem;

          @media ${device.mobile} {
            width: 100%;
            font-size: 14px;
            line-height: 22px;
          }
        }

        .img1 {
          width: 100%;
          /* height: 250px; */
          /* position: absolute;
          bottom: 0;
          right: 0;
          left: 0; */

          @media ${device.mobile} {
            /* margin-bottom: -1.5rem; */
          }
        }
      }

      .card2 {
        width: 50%;
        /* gap: 7rem; */
        display: flex;
        flex-direction: column;
        padding: 2rem 0rem 0 0rem;
        border-radius: 40px;
        /* position: relative; */
        color: ${({ theme }) => theme.colors.blue.blue_40};
        background: linear-gradient(to right, #aec6f3, #bcd0f5);

        @media ${device.mobile} {
          /* gap: 9rem; */
          width: 100%;
          /* padding: 2rem 1rem; */
        }

        p {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          padding: 0 2rem;

          @media ${device.mobile} {
            width: 100%;
            font-size: 14px;
            line-height: 22px;
          }
        }

        .img2 {
          width: 100%;
          height: 246px;
          /* margin-right: -4rem; */
          /* position: absolute;
          bottom: 0;
          right: 0;
          left: 0; */

          @media ${device.mobile} {
            height: 180px;
            /* position: static; */
            /* margin-bottom: -1.5rem; */
          }
          
          /* @media ${device.mobile} {
            width: 100%;
            font-size: 14px;
            line-height: 22px;
            margin-top: 4rem;
          } */
        }

      }
    }
  }

  .bottom {
    padding: 5rem;
    border-radius: 40px;
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue.blue_50};

    @media ${device.mobile} {
      padding: 2rem;
      border-radius: 20px;
    }

    .read-post {
      z-index: 10;
      align-items: center;
      margin-bottom: 25rem;
      position: relative;

      @media ${device.mobile} {
        width: 100%;
        margin-bottom: 15rem;
      }

      h2 {
        z-index: 10;
        font-size: 75px;
        font-weight: 700;
        line-height: 84px;
        color: ${({ theme }) => theme.colors.white};

        @media ${device.mobile} {
          font-size: 35px;
          line-height: 39px;
        }

        span {
          display: inline-block;

          svg {
            margin-bottom: -1rem;
            width: 70px;
            height: 100%;
          }
        }
      }

      .description {
        z-index: 10;
        width: 87%;
        margin: 2rem 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;

        @media ${device.mobile} {
          width: 100%;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
        }
      }

      .actions {
        display: flex;
        gap: 2rem;

        @media ${device.mobile} {
          flex-direction: column;
        }

        .filled {
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          line-height: 14px;
          border-radius: 5px;
          padding: 1.2rem 4rem;
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.purple.purple_10};
        }

        .outlined {
          gap: 1rem;
          border: none;
          display: flex;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          line-height: 14px;
          border-radius: 5px;
          align-items: center;
          padding: 1.2rem 3.5rem;
          justify-content: center;
          background-color: transparent;
          color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.purple.purple_10};
        }
      }
    }

    .light {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;

      @media ${device.mobile} {
        display: none;
      }
      /* z-index: -1; */
    }

    .light2 {
      display: none;

      @media ${device.mobile} {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
      }
    }

    .laptop-img {
      width: 790px;
      position: absolute;
      bottom: 0;
      right: 0;

      @media ${device.mobile} {
        width: 330px;
      }
    }
  }
`;
