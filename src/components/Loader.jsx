import React from "react";
import styled from "styled-components";
import LoadBg from "../assets/images/loader-backdrop.png";
import { device } from "../constants/breakpoints";
import EzLogo from "../assets/images/load-logo.svg";
import { circOut, easeOut, motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 9999,
      }}
        initial={{ top: '0vh' }}
        animate={{ top: '-100vh' }}
        transition={{ duration: 0.7, delay: 5, ease: "easeIn"}}
    >
      <LoaderView>
        <img className="backdrop" src={LoadBg} width={"100%"} height={"100%"} />
        <div className="loader">
          <div className="loader-text">
            <motion.h1
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -200, opacity: 0 }}
              transition={{
                delay: 2.5,
                duration: 1,
                type: "just",
                ease: "easeOut",
              }}
            >
              Managing your team's schedule made easy.
            </motion.h1>

            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.5,
                duration: 1,
                type: "just",
                ease: "easeOut",
              }}
            >
              Managing your team's productivity made EZ-ier
            </motion.h1>
          </div>

          <div className="progress">
            <img width={'40%'} src={EzLogo} />
            <svg
              className="progress-bar"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                initial={{
                  fill: "none",
                  stroke: "white",
                  strokeOpacity: "0.2",
                  strokeWidth: "8",
                  strokeDasharray: "0 251.3",
                }}
                animate={{
                  strokeDasharray: "251.3 251.3",
                }}
                transition={{
                  duration: 3,
                  delay: 1,
                  type: "just",
                  ease: "linear",
                }}
              />
            </svg>
          </div>
        </div>
      </LoaderView>
    </motion.div>
  );
};

export default Loader;

const LoaderView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .backdrop {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
  }

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    gap: 14rem;
    position: relative;
    z-index: 10;
    @media ${device.largeTablet} {
      width: 100%;
      gap: 10rem;
    }

    .loader-text {
      width: 100%;
      position: relative;

      h1 {
        background: linear-gradient(198.72deg, #ffffff 12.66%, #999999 121.56%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 75px;
        line-height: 84px;
        font-weight: 700;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        // height: 100%;
        @media ${device.largeTablet} {
          font-size: 35px;
          line-height: 40px;
        }
      }
    }

    .progress {
      width: 40%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .progress-bar {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
`;
