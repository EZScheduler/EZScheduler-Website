import React from "react";
import styled from "styled-components";
import { NavBar } from "../../../components/NavBar";

export const HeroSection = () => {
  return (
    <HeroView>
      <NavBar />
      <div className="hero-text">
        <div className="info">
          <h2 className='title'>Unlock peak employee performance with EZ Scheduler</h2>

          <p>
            EZ Scheduler empowers you to create efficient, flexible schedules
            for your business and employees for smooth operation and peak
            performance.
          </p>

          <button className="btn">Schedule a demo now</button>
      </div>

      </div>
        <div className="position-view">
          <div className="radius">
            <img src='https://res.cloudinary.com/doi40g1ct/image/upload/v1720374655/EZ-Scheduler/hero-blur_da4mpr.png' alt='Hero-img' className='img2' />
          </div>
          <div className="radius-2"></div>
          <div className="image">
            <img src='https://res.cloudinary.com/doi40g1ct/image/upload/v1720374667/EZ-Scheduler/hero-img_fqjij2.png' alt='Hero-img' className='img' />
          </div>
        </div>
    </HeroView>
  );
};

const HeroView = styled.div`
position: relative;
  margin-bottom: 19rem;
  padding: 2rem;
  /* padding-bottom: 5rem; */
  border-radius: 0 0 60px 60px;
  background: linear-gradient(to right, #47cdd0 20%, #7b68ee 70%, #a76af8 100%);
  color: ${({ theme }) => theme.colors.white};

  .hero-text {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .info {
      display: flex;
      padding: 4rem 0;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.white};

      p {
        width: 60%;
        font-size: 18px;
        font-weight: 300;
        line-height: 32px;
        padding: 2rem 0;
        color: ${({ theme }) => theme.colors.white};
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

      .btn {
        z-index: 10;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        padding: 1.2rem 2rem;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.purple.purple_10};
      }
    }
  }

  .position-view {
    display: flex;
    justify-content: center;
    position: relative;

    .radius {
      position: absolute;
      top: -12rem;
      left: 17rem;
      right: 18rem;
      max-width: 100rem;
      height: 30rem;
      /* margin: 0 auto; */
      /* border-radius: 50%;
      background: radial-gradient(circle, #a8f600, transparent);
      filter: blur(7em);
      z-index: 1; */

      img {
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }

    .radius-2 {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      /* width: 20rem;
      height: 20rem;
      border-radius: 50%;
      background: radial-gradient(circle, #a8f600, transparent);
      filter: blur(7rem);
      z-index: 1; */
    }

    .image {
      position: relative;
      z-index: 10;
      width: 1240px;
      margin-top: 2rem;
      margin-bottom: -16rem;

      .img {
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }
  }
`;
