import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { device } from "../constants/breakpoints";
import { Logo2 } from "./Logo2";
import { useNavigate } from "react-router-dom";
import { numberWithCommas, numberWithCommas2 } from "../constants/helpers";

export const CongratsModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const [randomNum, setRandomNum] = useState(null);

  const generateRandomNumber = () => {
    const min = 2000;
    const max = 5000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNum(randomNum);
  }

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <ModalView
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal-overlay"
        >
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <ContentView>
              <div className="header">
                <Logo2 />
              </div>

              <div className="content">
                <h3>You're In!</h3>

                <div className="text">
                  <p>
                    Your waitlist number is <span>{numberWithCommas2(randomNum)}</span>. We'll be in touch soon with updates and exclusive offers.
                  </p>
                  <p className='gradient'>Tell others to Join the EZ Side!</p>
                </div>

                <div className="actions">
                  <div></div>
                  <div className="button">
                    <button
                      onClick={() => {
                        setShowModal(false);
                        navigate("/");
                      }}
                    >
                      Back to home
                    </button>
                    <button 
                      className='outline'
                      onClick={() => {
                        setShowModal(false);
                        navigate("/blog");
                      }}
                    >
                      See our blog
                    </button>
                  </div>
                </div>
              </div>
            </ContentView>
          </motion.div>
        </ModalView>
      )}
    </AnimatePresence>
  );
};

const ModalView = styled(motion.div)`
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 9009;
  padding: 20px;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};

  @media ${device.mobile} {
    width: 100%;
    padding: 10px;
  }

  .modal {
    width: 100%;
    height: 100%;
    z-index: 30000;
    overflow-y: scroll;
    background-color: ${(props) => props.theme.colors?.white};
    
    @media ${device.mobile} {
      width: 100%;
      padding: 10px 0;
    }
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 20px;


  @media ${device.mobile} {
    padding: 10px 20px;
    padding-bottom: 20px;
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors?.white};
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;

    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  
`;

const ContentView = styled.div`
  /* max-width: 100%; */
  gap: 1rem;
  margin: 0;
  height: 100%;
  display: flex;
  padding: 1rem 4rem;
  border-radius: 28px;
  background-size: cover;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/images/success-bg.webp');

  @media ${device.mobile} {
    padding: 20px 25px;
    border-radius: 28px;
  }

  .header {
    width: 100%;
    display: flex;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.2rem;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors?.white};

    @media ${device.mobile} {
      margin-top: 1rem;
    }
  }

  .content {
    gap: 20px;
    width: 60%;
    display: flex;
    padding: 20px 0;
    margin-top: 5rem;
    align-items: start;
    justify-content: start;
    flex-direction: column;

    @media ${device.mobile} {
      width: 100%;
      padding: 10px 0;
      margin-top: 2rem;
    }

    h3 {
      font-size: 75px;
      font-weight: 700;
      line-height: 84px;
      color: ${({ theme }) => theme.colors?.blue.blue_30};

      @media ${device.mobile} {
        width: 100%;
        font-size: 35px;
        line-height: 39px;
      }
    }

    .text {
      gap: 20px;
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;

      p {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        color: ${({ theme }) => theme.colors.purple.purple_40};

        @media ${device.mobile} {
          width: 100%;
          font-size: 18px;
          padding: 10px 0;
          line-height: 24px;
        }

        span {
          font-weight: 700;
        }
      }

      .gradient {
        background: linear-gradient(to bottom, #8930fd 0%, #47cdd0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }
    }

    .actions {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;

      .button {
        display: flex;
        gap: 2rem;

        @media ${device.mobile} {
          width: 100%;
          gap: 1rem;
          flex-direction: column;
        }


        button {
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          line-height: 14px;
          padding: 1.5rem 5rem;
          border-radius: 6px;
          color: ${({ theme }) => theme.colors?.white};
          background-color: ${({ theme }) => theme.colors?.purple.purple_10};

          @media ${device.mobile} {
            width: 100%;
            font-size: 14px;
            padding: 1.5rem 2rem;
            /* line-height: 24px; */
          }
        }

        .outline {
          color: ${({ theme }) => theme.colors?.purple.purple_10};
          background-color: ${({ theme }) => theme.colors?.white};
          border: 1px solid ${({ theme }) => theme.colors?.purple.purple_10};
        }
      }
    }
  }
`;
