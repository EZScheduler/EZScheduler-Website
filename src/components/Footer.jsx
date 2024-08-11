import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import Ellipse from "../assets/images/ellipse.png";
import Footer2 from "../assets/images/footer-img2.png";
import { device } from "../constants/breakpoints";
import { General } from "./General";
import { Functionality } from "./Functionality";
import { Demo } from "./Demo";
import { tabs, socials } from "../constants/data";

export const Footer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

 

  const tabChange = (id) => {
    setActiveTab(id);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case 1:
        return <General />;
      case 2:
        return <Functionality />;
      case 3:
        return <Demo />;
      default:
    }
  };

  return (
    <FooterView>
      <div className="faq">
        <div className="left">
          <p className="bold">Some of the things you may want to know</p>
          <p className="sub-text">
            We answered questions so you don't have to ask them.
          </p>
        </div>

        <div className="right">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => tabChange(tab.id)}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {renderTabs()}
          </div>
        </div>
      </div>

      <div className="socials">
        <div className="further">
          <h2>Still have questions?</h2>

          <p>
            Feel free to contact our support team, and they will be happy to
            assist you.
          </p>

          <span>
            <a href="/contact">Contact us</a>
          </span>
        </div>

        <div className="social-links">
          {socials.map((social) => {
            return (
              <a
                className="links"
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <ReactSVG src={social.icon} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="extras">
        {/* <img src={Ellipse} alt='' className='footer-img' /> */}
        {/* <div className="radius"></div> */}
        <div className="info">
          {/* <p>What are you waiting for?</p> */}

          <h2>Your key to a happier, more productive workforce</h2>

          <button className="btn">Join the Ez side</button>
        </div>

        <div className="footer-sublinks">
          <p>&copy; EZ Scheduler 2024</p>

          <ul>
            <li>
              <Link to="/#">Insights</Link>
            </li>
            <li>
              <Link to="/#">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <ul className="order-1">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/#">Terms of service</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="radius" /> */}
      <img src={Ellipse} alt="" className="footer-img" />
      <img src={Footer2} alt="" className="footer-img2" />
    </FooterView>
  );
};

const FooterView = styled.div`
  padding: 10rem 4rem 2.7rem 4rem;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 40px;
  background-image: url("https://res.cloudinary.com/doi40g1ct/image/upload/v1722756257/EZ-Scheduler/footer-bg-2_iyyuzw.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${device.mobile} {
    /* width: 100%; */
    padding: 3rem 1rem;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .footer-img {
    width: 1400px;
    height: 45%;
    margin: rem 0;
    position: absolute;
    border-radius: 0 0 40px 40px;
    right: 0;
    left: 0;
    bottom: 0;

    @media ${device.mobile} {
      width: 410px;
      height: 70%;
    }
  }

  .footer-img2 {
    width: 700px;
    min-height: 20%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 0 0;

    @media ${device.mobile} {
      display: none;
    }
  }

  .radius {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    padding: 10rem 0 0 0;
    background: radial-gradient(circle, #8930fd, transparent);
    border-radius: 60% 60% 0 0;
    filter: blur(10px);
  }

  .faq {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    color: ${({ theme }) => theme.colors.white};

    .left {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      .bold {
        width: 80%;
        font-size: 75px;
        font-weight: 600;
        line-height: 84px;
        text-align: center;

        @media ${device.mobile} {
          width: 100%;
          font-size: 35px;
          line-height: 39px;
        }
      }

      .sub-text {
        padding: 1rem 0;
        font-size: 18px;
        font-weight: 300;
        line-height: 32px;
        text-align: center;
        color: ${({ theme }) => theme.colors.purple.purple_30};

        @media ${device.mobile} {
          width: 100%;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    .right {
      width: 70%;
      color: ${({ theme }) => theme.colors.white};

      @media ${device.mobile} {
        width: 100%;
      }

      .tabs {
        display: flex;
        margin-bottom: 4rem;
        justify-content: space-between;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey.grey_30};

        .tab {
          width: 40%;
          border: none;
          font-size: 18px;
          cursor: pointer;
          background: none;
          font-weight: 400;
          line-height: 24px;
          padding-bottom: 0.5rem;
          color: ${({ theme }) => theme.colors.grey.grey_30};

          @media ${device.mobile} {
            font-size: 12px;
            line-height: 12px;
          }
        }

        .active  {
          color: ${({ theme }) => theme.colors.white};
          border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  .socials {
    display: flex;
    padding: 3rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey.grey_40};

    .further {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 2rem 0;

      /* @media ${device.mobile} {
        width: 100%;
        font-size: 16px;
        line-height: 24px;
      } */

      h2 {
        padding: 1rem 0;
        font-size: 45px;
        font-weight: 700;
        line-height: 54px;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};

        @media ${device.mobile} {
          width: 100%;
          font-size: 28px;
          line-height: 40px;
        }
      }

      p {
        font-size: 18px;
        font-weight: 300;
        line-height: 32px;
        text-align: center;
        color: ${({ theme }) => theme.colors.purple.purple_30};

        @media ${device.mobile} {
          font-size: 16px;
          line-height: 24px;
        }
      }

      a {
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .social-links {
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: center;
    }
  }

  .extras {
    position: relative;
    z-index: 100;

    .info {
      display: flex;
      padding: 4rem 0;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.white};

      @media ${device.mobile} {
        padding: 2rem 0;
      }

      h2 {
        width: 80%;
        font-size: 74px;
        font-weight: 600;
        line-height: 84px;
        padding: 1rem 0;
        margin-bottom: 2rem;

        @media ${device.mobile} {
          font-size: 35px;
          line-height: 39px;
        }
      }

      .btn {
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

    .footer-sublinks {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      padding-bottom: -4rem;
      font-size: 14px;

      @media ${device.mobile} {
        gap: 2rem;
        flex-direction: column-reverse;
      }

      p {
        font-weight: 300;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.white};
      }

      ul {
        display: flex;
        gap: 2rem;

        li {
          font-weight: 300;
          list-style: none;
          color: ${({ theme }) => theme.colors.grey.grey_50};

          a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.grey.grey_50};
          }
        }
      }

      .order-1 {
        display: flex;
        gap: 2rem;

        li {
          font-weight: 300;
          list-style: none;
          color: ${({ theme }) => theme.colors.grey.grey_50};

          a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.grey.grey_50};
          }
        }

        @media ${device.mobile} {
          order: 1;
        }
      }
    }
  }
`;
