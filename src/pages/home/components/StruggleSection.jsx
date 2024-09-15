import React, { useState } from "react";
import styled from "styled-components";
import Card1 from "../../../assets/images/clock.webp";
import Card2 from "../../../assets/images/card2.webp";
import { device } from "../../../constants/breakpoints";
import { PDFViewer } from "./PDFViewer";
import CarouselSlider from "./Carousel";

export const StruggleSection = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <StruggleView>
      <div className="top">
        <h2>
          The Struggles of Traditional{" "}
          <span className="gradient-text">Workforce Management</span>
        </h2>

        <div className="cards">
          <div className="card1">
            <p>
              As managers, we know the frustration of spending hours trying to
              find the best schedule for the week, month, or semester. We've
              dealt with juggling multiple apps, emails/texts, spreadsheets, and
              project management tools. That's why we created EZ Scheduler—to
              bring all your scheduling and productivity needs into a single
              dashboard.
            </p>

            <img src={Card1} alt="" className="img1" />
          </div>
          <div className="card2">
            <p>
              EZ Scheduler lets you streamline scheduling, prevent overstaffing,
              and track overtime with ease. Empower your team with shift
              flexibility, assign sub-managers, track and measure productivity,
              and communicate directly with your team. Gain actionable insights
              to optimize your team's performance or celebrate successes.
            </p>

            <img src={Card2} alt="" className="img2" />
          </div>
        </div>
      </div>

      <CarouselSlider />

      <PDFViewer
        showModal={showPreviewModal}
        setShowModal={setShowPreviewModal}
      />
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
    .gradient-text {
      background: linear-gradient(137.48deg, #8930FD 12.39%, #49CCF9 92.5%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 75px;
      font-weight: 700;
      line-height: 84px;
      text-align: center;
      padding: 4rem 0;
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

      @media ${device.largeTablet} {
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
        position: relative;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.blue.blue_40};

        @media ${device.largeTablet} {
          width: 100%;
          /* padding: 2rem 1rem; */
          /* gap: 9rem; */
          height: 450px;
        }

        p {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          padding: 0 2rem;

          @media ${device.largeTablet} {
            width: 100%;
            font-size: 14px;
            line-height: 22px;
          }
        }

        .img1 {
          width: 50%;
          /* height: 250px; */
          position: absolute;
          bottom: 0;
          right: 0;
          /* left: 0; */

          @media ${device.mobile} {
            margin-top: 10rem;
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

        @media ${device.largeTablet} {
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


    
  }
`;
