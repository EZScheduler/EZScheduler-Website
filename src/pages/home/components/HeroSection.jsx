import React from "react";
import styled from "styled-components";
import { NavBar } from "@/components/NavBar";
// import Background from "@/assets/images/home-bg.webp";
// import HeroBg from "@/assets/images/hero-bg.webp";
import { ReactSVG } from "react-svg";
import { Icons } from "@/assets/icons/icons";
import { device } from "@/constants/breakpoints";
import teaser from '@/assets/lottie/teaser-video.mp4';
import ReactPlayer from "react-player";

export const HeroSection = () => {

  return (
    <HeroView>
      <div className="hero-text">
        <NavBar />
        <div className="info">
          <h2 className="title">
            Take Back Control of Your Workforce Management with EZ Scheduler{" "}
            <span>
              <ReactSVG src={Icons.calenderCheckIcon} />
            </span>
          </h2>

          <p>
            The All-in-One Solution for Effortless Shift Management and
            Productivity Tracking
          </p>

          <button className="btn">
            <span>Get started</span>
          </button>
        </div>
      </div>
      <div className="position-view">
        <div className="image">
          {/* <img src={HeroBg} alt="Hero-img" className="img" /> */}
          <ReactPlayer
            className='react-player'
            url={teaser} 
            playing={true} 
            loop={true} 
            muted={true}
            wrapper={"div"}
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </HeroView>
  );
};

const HeroView = styled.div`
  margin-bottom: 19rem;
  border-radius: 40px;
  background-image: url("/images/home-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${device.mobile} {
    width: 100%;
    margin-bottom: 10rem;
    border-radius: 20px;
  }

  .hero-text {
    display: flex;
    margin: 0 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media ${device.mobile} {
      width: 100%;
      margin: 0;
      padding: 0 1rem;
    }

    .info {
      padding: 4rem 0 4rem 6rem;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.white};

      @media ${device.mobile} {
        width: 100%;
        align-items: center;
        padding: 0 0rem 0rem 0rem;
      }

      p {
        width: 60%;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        padding: 2rem 0;
        text-align: start;
        margin-top: -1rem;
        color: ${({ theme }) => theme.colors.grey.grey_50};

        @media ${device.mobile} {
          width: 100%;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
        }
      }

      .title {
        width: 76%;
        font-size: 74px;
        font-weight: 600;
        line-height: 84px;
        padding: 1rem 0;
        padding-top: 2rem;

        @media ${device.mobile} {
          width: 100%;
          font-size: 35px;
          line-height: 39px;
          text-align: center;
        }

        span {
          display: inline-block;
          padding: 0;

          svg {
            margin-bottom: -1rem;
            width: 70px;
            height: 100%;

            @media ${device.mobile} {
              margin-bottom: -0.45rem;
              width: 40px;
              height: 100%;
            }
          }
        }
      }

      .btn {
        z-index: 10;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        padding: 1.2rem 3.5rem;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.white};

        span {
          background: linear-gradient(to right, #8930fd 0%, #47cdd0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media ${device.mobile} {
        }
      }
    }
  }

  .position-view {
    display: flex;
    justify-content: center;
    position: relative;

    .image {
      position: relative;
      z-index: 10;
      width: 1300px;
      margin-top: 2rem;
      margin-bottom: -16rem;
      border-radius: 40px;
      .react-player video {
        width: 100%;
        height: 60%;
        border-radius: 40px;
      }

      @media ${device.mobile} {
        margin-top: 2rem;
        margin-bottom: -7rem;
      }

      .img {
        width: 100%;
        height: 100%;
        z-index: 10;

        @media ${device.mobile} {
        }
      }
    }
  }
`;
