import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../constants/breakpoints";
import { ReactSVG } from "react-svg";
import { Icons } from "../assets/icons/icons";

export const General = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "What is EZ Scheduler?",
      content:
        "EZ Scheduler is the ultimate all-in-one tool designed to simplify and streamline scheduling and performance management for managers across various industries. It is a comprehensive tool built for busy managers to create, manage, and track schedules and shifts, communicate with their team, and measure productivity from a single dashboard.",
    },
    {
      title: "How do I know if EZ Scheduler is the right app for me?",
      content:
        "Because we are managers and we've been in your shoes - Drowning in spreadsheets, lost in endless email threads, and battling complex software just to manage your team's schedule and still unable to measure performance. We understand your frustration, and we built this solution with you in mind.",
    },
    {
      title: "Who can benefit from EZ Scheduler?",
      content:
        "EZ Scheduler is ideal for managers across various industries, including hospitals, colleges, restaurants, small businesses, medium-sized enterprises, and large corporations.  Our all-in-one, web-based solution is designed to make workforce management easy, efficient, and effective, no matter the size of your team or the complexity of your operations",
    },
  ];

  return (
    <GeneralView>
      {accordionItems.map((item, index) => {
        return (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "open" : ""}`}
            onClick={
              openIndex === index
                ? () => setOpenIndex(null)
                : () => setOpenIndex(index)
            }
          >
            <div className="accordion-header">
              <p>{item.title}</p>
              <button>
                <ReactSVG src={Icons.arrowUpIcon} />
              </button>
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
  );
};

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
