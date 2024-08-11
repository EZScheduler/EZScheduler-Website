import React, { useState } from 'react'
import styled from 'styled-components';
import { device } from '../constants/breakpoints';
import { ReactSVG } from "react-svg";
import { Icons } from "../assets/icons/icons";

export const General = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "What is EZ Scheduler?",
      content:
        "EZ Scheduler is a comprehensive software application designed to simplify and streamline scheduling and performance management for managers across various industries. It’s the ultimate all-in-one tool for managers to create, manage, and track schedules and shifts, communicate with their team, and measure productivity from a single dashboard.",
    },
    {
      title: "How do I know if EZ Scheduler is the right app for me?",
      content:
        "Because we’ve been in your shoes, we understand your frustration, and we built this solution with you in mind. ",
    },
    {
      title: "Who can benefit from EZ Scheduler?",
      content:
        "EZ Scheduler is ideal for managers across various industries, including hospitals, colleges, restaurants, small businesses, medium-sized enterprises, and large corporations. It is suitable for any organization that requires effective scheduling and workforce management.",
    },
  ];

  return (
    <GeneralView>
      {accordionItems.map((item, index) => {
        return (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="accordion-header">
              <p>{item.title}</p>
              {openIndex === index ? (
                <button onClick={() => setOpenIndex(null)}>
                  <ReactSVG src={Icons.arrowUpIcon} />
                </button>
              ) : (
                <button onClick={() => setOpenIndex(index)}>
                  <ReactSVG src={Icons.arrowDownIcon} />
                </button>
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
    </GeneralView>
  )
}

const GeneralView = styled.div`
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

      @media ${device.mobile} {
        width: 100%;
        align-items: center;
      }

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
        border: none;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .accordion-content {
      padding: 0 1rem;
      padding-bottom: 2rem;
      border: none;
      background-color: ${({ theme }) => theme.colors.blue.blue_20};

      p {
        width: 96%;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    &.open {
      .accordion-header {
        padding: 1.2rem 1rem;
        background-color: ${({ theme }) => theme.colors.blue.blue_20};
        border: none;
      }
      border-bottom: none;
    }
  }
`;