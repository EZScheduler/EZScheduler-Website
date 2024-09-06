import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../constants/breakpoints";
import { ReactSVG } from "react-svg";
import { Icons } from "../assets/icons/icons";

export const Functionality = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "Does EZ Scheduler support multiple schedules and sub-managers?",
      content:
        "Absolutely. EZ Scheduler allows you to create and manage multiple schedules simultaneously. You can also add sub-managers to oversee specific teams or projects, making it easier to delegate responsibilities.",
    },
    {
      title: "Can EZ Scheduler help with compliance and labor laws?",
      content:
        "Yes, EZ Scheduler includes features that help ensure compliance with labor laws. You can set limits on the number of hours an employee can work, which is particularly beneficial for organizations with strict work-hour policies like colleges.",
    },
    {
      title: "How does EZ Scheduler help with employee scheduling?",
      content:
        "EZ Scheduler makes it easy to create schedules in minutes, assign tasks, and manage shifts. Employees can select their available hours, request shift changes, and communicate directly with managers through the app. It also tracks shift swaps and call-offs to ensure smooth operations. Want to learn more? Contact a support representative here: +1 (845) 214-2717",
    },
    {
      title: "Is EZ Scheduler easy to use?",
      content:
        "Absolutely! It's in our DNA. EZ-(as in “easy”) Scheduler is has an intuitive interface that is easy to learn and navigate, even for users with limited technical experience.",
    },
    {
      title: "Is EZ Scheduler secure?",
      content:
        "Data security is a top priority for us. EZ Scheduler uses industry-standard security measures to protect your data.",
    },
    {
      title: "Do I need to download any software?",
      content:
        "No. EZ Scheduler is a web-based app, accessible from any device with an internet connection.",
    },
  ];

  return (
    <FunctionView>
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
    </FunctionView>
  );
};

const FunctionView = styled.div`
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
