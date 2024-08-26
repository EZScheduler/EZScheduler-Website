import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { device } from "../constants/breakpoints";
import { Logo2 } from "./Logo2";
import { useNavigate } from "react-router-dom";

export const CongratsModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();

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
            <ModalContent>
              <div className="header">
                <Logo2 />
              </div>
              <div className="content">
                <h3>You're In!</h3>

                <div className="text">
                  <p>
                    Congratulations! You're officially one of the first 1000
                    people to join our waitlist. We're excited to have you on
                    board! We'll be in touch soon with updates and exclusive
                    offers.
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
                    >
                      See our blog
                    </button>
                  </div>
                </div>
              </div>
            </ModalContent>
          </motion.div>
        </ModalView>
      )}
    </AnimatePresence>
  );
};

const ModalView = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  /* background: rgba(0, 0, 0, 0.4); */
  background: ${({ theme }) => theme.colors.white};
  z-index: 9009;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    /* z-index: 30000;
    position: fixed; */
    /* border-radius: 4px; */
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    padding-top: 0;
    padding-bottom: 20px;
    border-radius: 15px;
    max-height: 90%;
    overflow-y: scroll;
    /* background: ${({ theme }) => theme.colors.white}; */
    background-image: url('src/assets/images/success-bg.webp');
    background-size: cover;

    @media ${device.mobile} {
      width: 100%;
      padding: 30px 0;
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

  .content {
    width: 50%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 20px 0;
    gap: 20px;
    margin-top: 5rem;

    h3 {
      font-size: 75px;
      font-weight: 700;
      line-height: 84px;
      color: ${({ theme }) => theme.colors?.blue.blue_30};
    }

    .text {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      gap: 20px;

      p {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        color: ${({ theme }) => theme.colors.purple.purple_40};
      }
    }

    .actions {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      width: 100%;

      .button {
        display: flex;
        gap: 2rem;

        button {
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          line-height: 14px;
          padding: 1rem 2rem;
          border-radius: 6px;
          color: ${({ theme }) => theme.colors?.white};
          background-color: ${({ theme }) => theme.colors?.purple.purple_10};
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
