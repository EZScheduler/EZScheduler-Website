import React, { useState } from "react";
import styled from "styled-components";
import { FormModal } from "../../components/FormModal";
import LogoIcon from '../../assets/icons/ez.icon.svg';
import Lottie from "lottie-react";
import backgroundTeaser from "../../assets/lottie/EZ web GIF.lottie.json";
import { device } from "../../constants/breakpoints";
import Facebook from '../../assets/icons/facebook.icon.svg';
import Twitter from '../../assets/icons/twitter.icon.svg';
import Instagram from '../../assets/icons/instagram.icon.svg';
import LinkedIn from '../../assets/icons/linkedin.icon.svg';
import Youtube from '../../assets/icons/youtube.icon.svg';


export const Waiting = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  const style = {
    width: "100%",
    height: "100%",
    position: "relativee",
  };

  return (
    <>
      <WaitingView>
        <header>
          <div className='logo-wrapper'>
            <img src={LogoIcon} alt="Ez-Scheduler" />
          </div>
          <div>
            <button onClick={() => setShowFormModal(true)}>
              Join Waitlist
            </button>
          </div>
        </header>

        <div className="center">
          <button onClick={() => setShowFormModal(true)}>
            Join Waitlist
          </button>
        </div>

        <div className='background'>
          <img src="https://res.cloudinary.com/doi40g1ct/image/upload/v1720727384/EZ-Scheduler/EZwebGIF-_u408or.gif" alt="" />
          <img src="https://res.cloudinary.com/doi40g1ct/image/upload/v1720727384/EZ-Scheduler/EZwebGIF-_u408or.gif" alt="" />
          <img src="https://res.cloudinary.com/doi40g1ct/image/upload/v1720727384/EZ-Scheduler/EZwebGIF-_u408or.gif" alt="" />
        </div>

        <div className='socials'>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://x.com/ezschedulerxyz" target='_blank'>
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/ezschedulerxyz/" target='_blank' >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/ez-scheduler-llc" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href='https://www.youtube.com/@EZScheduler' target='_blank'>
            <img src={Youtube} alt="Youtube" />
          </a>
        </div>
      </WaitingView>
      <FormModal showModal={showFormModal} setShowModal={setShowFormModal} />
    </>
  );
};

const WaitingView = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url("https://res.cloudinary.com/doi40g1ct/image/upload/v1720727384/EZ-Scheduler/EZwebGIF-_u408or.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  header {
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: space-between;

    .logo-wrapper {
      width: 25%;

      img {
        width: 100%;
        height: auto;
      
      }
    }
  }

  .background {
    display: none;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 28rem;
    left: 6rem;
    right: 6rem;

    button {
      padding: 1rem 4em;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      color: ${({ theme }) => theme.colors?.white};
      background-color: ${({ theme }) => theme.colors?.purple.purple_10};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 1.2rem 2rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    color: ${({ theme }) => theme.colors?.white};
    background-color: ${({ theme }) => theme.colors?.purple.purple_10};
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors?.white};

    a {
      margin: 0 1rem;
    }
  }


  @media ${device.mobile} {
    background-image: none;
    background-position: 0%;
    background-size: none;

    .center {
      top: 25rem;
      left: 6rem;
      right: 6rem;

      button {
        padding: 1.2rem 2rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        color: ${({ theme }) => theme.colors?.white};
        background-color: ${({ theme }) => theme.colors?.purple.purple_10};
      }
    }

    header {
      padding: 1rem;

      .logo-wrapper {
        width: 40%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .background {
      display: block;
      width: 100vw;
      /* height: 100%; */

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    button {
      padding: 0.7rem 1.2rem;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .socials {

    }
  }


`;
