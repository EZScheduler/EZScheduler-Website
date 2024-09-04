import React, { useState } from "react";
import styled from "styled-components";
import Light from "../../../assets/images/light.webp";
import Light2 from "../../../assets/images/mobile-ellipse.webp";
// import Card1 from "../../../assets/images/card1.webp";
import Card1 from "../../../assets/images/clock.webp";
import Card2 from "../../../assets/images/card2.webp";
import Laptop from "../../../assets/images/laptop.webp";
import Laptop2 from "../../../assets/images/laptop2.webp";
import { ReactSVG } from "react-svg";
import { Icons } from "../../../assets/icons/icons";
import { device } from "../../../constants/breakpoints";
import axios from "axios";
import toast from "react-hot-toast";
import fileDownload from "js-file-download";
import { PDFViewer } from "./PDFViewer";

export const StruggleSection = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const pdfFileUrl =
    "https://res.cloudinary.com/doi40g1ct/image/upload/v1723815396/EZ-Scheduler/EZ_Story_compressed_blk2yg.pdf";

  const handleFileDownload = (url, filename) => {
    const parts = filename.split("/");
    const newFileName = parts[parts.length - 1];
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        console.log("File downloaded successfully.");
        fileDownload(res.data, newFileName);
        toast.success("Pdf downloaded successfully.");
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <StruggleView>
      <div className="top">
        <h2>The Struggles of Traditional Scheduling</h2>

        <div className="cards">
          <div className="card1">
            <p>
              As managers, we understand the frustration of spending countless
              hours trying to figure out the best schedule for the period, week,
              month, or semester. We've experienced the pain of juggling
              multiple applications, spreadsheets, texts and project management
              software. That's why we created EZ Scheduler - the ultimate
              solution to streamline all your scheduling and productivity needs
              in one place.
            </p>

            <img src={Card1} alt="" className="img1" />
          </div>
          <div className="card2">
            <p>
              With EZ Scheduler, you can manage your team, schedules, and shifts
              effortlessly from a single dashboard. Create schedules in minutes,
              assign tasks, ensure compliance with labor laws and track
              productivity. Communicate directly with your team, and generate
              instant reports. Our intuitive app is designed to help you become
              more efficient, save time, and do more.
            </p>

            <img src={Card2} alt="" className="img2" />
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="bottom">
          <div className="read-post">
            <div className="post-title">
              <h2>Welcome to the</h2>
              <ReactSVG src={Icons.ezSide} />
              <span>side</span>
            </div>
            <div className="post-title-2">
              <h2>Welcome to the</h2>
              <div className="icon">
                <ReactSVG src={Icons.ezSide} />
                <span>side</span>
              </div>
            </div>

            <p className="description">
              EZ Scheduler is built to make scheduling easy for managers across
              all industries, whether you're in colleges, hospitals,
              restaurants, small businesses, or large corporations.
            </p>

            <div className="actions">
              <button
                className="filled"
                onClick={() => setShowPreviewModal(true)}
              >
                Read our story
              </button>
              <button
                className="outlined"
                onClick={() => handleFileDownload(pdfFileUrl, "EZ-Story.pdf")}
              >
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
      </div>

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
        position: relative;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.blue.blue_40};

        @media ${device.mobile} {
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

          @media ${device.mobile} {
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

  .bottom-container {
    border: 1px solid red;
    display: flex;
    gap: 40px;
    
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

      .post-title {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        @media ${device.mobile} {
          display: none;
        }

        h2 {
          z-index: 10;
          font-size: 75px;
          font-weight: 700;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.mobile} {
            width: 100%;
            font-size: 35px;
            line-height: 39px;
          }
        }

        svg {
          width: 50px;
          margin-bottom: -1rem;

          @media ${device.mobile} {
            font-size: 20px;
            /* line-height: 39px; */
          }
        }

        span {
          z-index: 10;
          font-size: 75px;
          font-weight: 700;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.mobile} {
            font-size: 35px;
            line-height: 39px;
          }
        }
      }

      .post-title-2 {
        display: none;
        align-items: center;
        gap: 0.6rem;

        .icon {
          gap: 0.6rem;
          display: flex;
          align-items: center;

          @media ${device.mobile} {
            gap: 0.5rem;
          }
        }

        @media ${device.mobile} {
          display: flex;
          flex-direction: column;

          h2 {
            width: 100%;
            font-size: 35px;
            line-height: 39px;
            text-align: center;
          }

          span {
            font-size: 35px;
            font-weight: 700;
            line-height: 39px;
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
