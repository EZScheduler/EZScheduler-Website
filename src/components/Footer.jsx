import React, { useState } from "react";
import styled from "styled-components";
// import { ReactComponent as ArrowDown } from '../assets/icons/arrow-down.icon.svg';
import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrow-up.icon.svg';

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
      <div>
        <div>
          <p>Some of the things you may want to know</p>
          <p>We answered questions so you don't have to ask them.</p>
        </div>

        <div className='right'>
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
                    <button onClick={() => setOpenIndex(null)}></button>
                  ) : (
                    <button onClick={() => setOpenIndex(index)}><ArrowUpIcon /></button>
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
    </FooterView>
  );
};

const FooterView = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.blue.blue_10};

  .right {
    width: 60%;
    color: ${({ theme }) => theme.colors.white};

    .accordion {
      .accordion-item {
        margin-bottom: 1rem;
        padding: 1rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border1};

        .accordion-body {
          padding: 0 1rem;
          border-radius: 10px;
          background-color: ${({ theme }) => theme.colors.grey};
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;

          p {
            font-weight: 600;
            font-size: 15px;
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
          border-radius: 0 0 10px 10px;
          border-top: none;
          border-left: 1px solid ${({ theme }) => theme.colors.border2};
          border-right: 1px solid ${({ theme }) => theme.colors.border2};
          border-bottom: 1px solid ${({ theme }) => theme.colors.border2};
          background-color: ${({ theme }) => theme.colors.grey};

          p {
            width: 96%;
            line-height: 24px;
            color: ${({ theme }) => theme.colors.text};
          }
        }

        &.open {
          .accordion-header {
            border-radius: 10px 10px 0 0;
            padding: 1.2rem 1rem;
            background-color: ${({ theme }) => theme.colors.grey};
            border: 1px solid ${({ theme }) => theme.colors.border2};
            border-bottom: none;
          }
          border-bottom: none;
        }
      }
    }
  }
`;
