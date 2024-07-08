import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { ReactComponent as ArrowDown } from '../assets/icons/arrow-down.icon.svg';
// import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrow-up.icon.svg';

export const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItems = [
    {
      title: "Neser kalsongbadare. Håtysamma bolall, prengar.",
      content:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon.",
    },
    {
      title: "Neser kalsongbadare. Håtysamma bolall, prengar.",
      content:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon.",
    },
    {
      title: "Neser kalsongbadare. Håtysamma bolall, prengar.",
      content:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon.",
    },
    {
      title: "Neser kalsongbadare. Håtysamma bolall, prengar.",
      content:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon.",
    },
  ];

  return (
    <FooterView>
      <div className='faq'>
        <div className='left'>
          <p className='bold'>Some of the things you may want to know</p>
          <p className='sub-text'>We answered questions so you don't have to ask them.</p>
        </div>

        <div className="right">
          <div className='accordion'>
            {accordionItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`accordion-item ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  <div className="accordion-header">
                    <p>{item.title}</p>
                    {openIndex === index ? (
                      <button onClick={() => setOpenIndex(null)}>-</button>
                    ) : (
                      <button onClick={() => setOpenIndex(index)}>+</button>
                    )}
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='extras'>
        <div className='info'>
          <p>What are you waiting for?</p>

          <h2>
            Work smarter, not harder with EZ Scheduler!
          </h2>

          <button className='btn'>
            Schedule a demo now
          </button>
        </div>


        <div className='footer-sublinks'>
          <p>&copy; EZ Scheduler 2024</p>

          <ul>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>

          <ul>
            <li><Link href='/#'>Privacy Policy</Link></li>
            <li><Link href='/#'>Terms of service</Link></li>
          </ul>
        </div>
      </div>
    </FooterView>
  );
};

const FooterView = styled.div`
  margin-bottom: 0;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.blue.blue_10};

  .faq {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    color: ${({ theme }) => theme.colors.white};

    .left {
      width: 47%;

      .bold {
        font-size: 56px;
        font-weight: 600;
        line-height: 62px;
      }

      .sub-text {
        font-size: 18px;
        font-weight: 300;
        line-height: 32px;
        padding: 1rem 0;
        color: ${({ theme }) => theme.colors.grey.grey_50};
      }
    }

    .right {
      width: 50%;
      color: ${({ theme }) => theme.colors.white};
  
      .accordion {

        .accordion-item {
          margin-bottom: 1rem;
          padding: 0rem 0;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid ${({ theme }) => theme.colors.grey.grey_40};
  
          .accordion-body {
            padding: 0 1rem;
            border-radius: 10px;
            background-color: ${({ theme }) => theme.colors.grey.grey_10};
          }
  
          .accordion-header {
            display: flex;
            padding: 0 1rem;
            justify-content: space-between;
  
            p {
              font-weight: 600;
              font-size: 18px;
              line-height: 32px;
            }
  
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 1rem;
              height: 1rem;
              border-radius: 100px;
              cursor: pointer;
              background: transparent;
              border: 1px solid ${({ theme }) => theme.colors.text};
              color: ${({ theme }) => theme.colors.text};
            }
          }
  
          .accordion-content {
            padding: 0 1rem;
            padding-bottom: 2rem;
            /* border-radius: 0 0 10px 10px; */
            /* border-top: none; */
            border: none;
            /* border-left: 1px solid ${({ theme }) => theme.colors.border2};
            border-right: 1px solid ${({ theme }) => theme.colors.border2};
            border-bottom: 1px solid ${({ theme }) => theme.colors.border2}; */
            background-color: ${({ theme }) => theme.colors.blue.blue_20};
  
            p {
              width: 96%;
              line-height: 24px;
              color: ${({ theme }) => theme.colors.text};
            }
          }
  
          &.open {
            .accordion-header {
              /* border-radius: 10px 10px 0 0; */
              padding: 1.2rem 1rem;
              background-color: ${({ theme }) => theme.colors.blue.blue_20};
              /* border: 1px solid ${({ theme }) => theme.colors.border2}; */
              /* border-bottom: none; */
              border: none;
            }
            border-bottom: none;
          }
        }
      }
    }
  }

  .extras {

    .info {
      display: flex;
      padding: 4rem 0;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.white};

      p {
        font-size: 18px;
        font-weight: 300;
        line-height: 32px;
        background: linear-gradient(to right, #8930FD 0%, #47CDD0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h2 {
        width: 70%;
        font-size: 74px;
        font-weight: 600;
        line-height: 84px;
        padding: 1rem 0;
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
      font-size: 14px;

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
    }
  }
`;
