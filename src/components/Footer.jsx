import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import Ellipse from "../assets/images/ellipse.webp";
import Footer2 from "../assets/images/footer-img2.webp";
import { device } from "../constants/breakpoints";
import { General } from "./General";
import { Functionality } from "./Functionality";
import { Demo } from "./Demo";
import { tabs, socials } from "../constants/data";
import { FormModal } from "./FormModal";
import Footerbg from "../assets/images/footer-bg-2.png";

export const Footer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showFormModal, setShowFormModal] = useState(false);

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
    <>
      <FooterView>
        <img src={Footerbg} width={'100%'} height={'100%'} className='footer-bg' alt="background image" />
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
            <div className="tab-content">{renderTabs()}</div>
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
              <Link to="/contact">Contact us</Link>
            </span>
          </div>

          <div className="social-links">
            {socials.map((social) => {
              console.log(social.link);
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
          <div className="info">
            <h2>Your key to a happier, more productive workforce.</h2>
            <button className="btn" onClick={() => setShowFormModal(true)}>
              Join the EZ side
            </button>
          </div>

          <div className="footer-sublinks">
            <p>&copy; EZ Scheduler 2024</p>

            <ul className="order">
              <li>
                <Link to="/blog">Insights</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
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
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <img src={Ellipse} alt="background image" width={"100%"} className="footer-img" />
        <img src={Footer2} alt="background image" width={"70%"} className="footer-img2" />
      </FooterView>
      <FormModal showModal={showFormModal} setShowModal={setShowFormModal} />
    </>
  );
};

const FooterView = styled.div`
  padding: 10rem 4rem 2.7rem 4rem;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 40px;
  position: relative;

  .footer-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  @media ${device.mobile} {
    /* width: 100%; */
    padding: 3rem 1rem;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .footer-img {
    height: 45%;
    margin: rem 0;
    position: absolute;
    border-radius: 0 0 40px 40px;
    left: 0;
    z-index: 1;
    bottom: 0;

    @media ${device.mobile} {
      height: 70%;
    }
  }

  .footer-img2 {
    position: absolute;
    left: -2rem;
    bottom: -8rem;
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
    position: relative;
    z-index: 5;
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

        .active {
          color: ${({ theme }) => theme.colors.white};
          border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  .socials {
    position: relative;
    z-index: 20;
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
    width: 100%;

    .info {
      display: flex;
      padding: 4rem 0;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
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
      width: 100%;
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
        width: 20%;
        @media ${device.mobile} {
          width: unset;
        }
      }

      .order {
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        width: 20%;
        @media ${device.mobile} {
          width: unset;
        }

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
        width: 20%;
        @media ${device.mobile} {
          width: unset;
        }

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
