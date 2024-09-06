import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../constants/breakpoints";
import { ReactSVG } from "react-svg";
import { Icons } from "../assets/icons/icons";

export const Demo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "How much does it cost?",
      content:
        "We designed EZ Scheduler with a solution and intention to make it affordable. With plans starting as low as $39 per month, you can join the EZ Side and begin to do more. See our pricing page for more information.",
    },
    {
      title: "Can I see a demo?",
      content:
        "Yes, you can! Good things take time, so join our waitlist to hear our official launch date and be the first to see the live demo.",
    },
    {
      title: "How do I start using EZ Scheduler/When does it launch?",
      content:
        "We're as excited as you are! We'll be announcing our official launch date soon. Join the waitlist to receive updates on our product launch and probably get a price discount when it launches.",
    },
  ];

  return (
    <DemoView>
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
    </DemoView>
  );
};

const DemoView = styled.div`
  .accordion-item {
    margin-bottom: 1rem;
    padding: 0rem 0;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey.grey_40};
    cursor: pointer;

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
