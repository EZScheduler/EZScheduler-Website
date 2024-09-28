import { useState } from "react";
import styled from "styled-components";
import { Icons } from "../../../assets/icons/icons";
import ReactPlayer from "react-player";
import feature1 from "@/assets/lottie/feature4.mp4";
import feature2 from "@/assets/lottie/Empowered.mp4";
import feature3 from "@/assets/lottie/Streamlined.mp4";
import feature4 from "@/assets/lottie/Boosted.mp4";
import feature5 from "@/assets/lottie/Compliance.mp4";
import feature6 from "@/assets/lottie/Simplified.mp4";
import feature7 from "@/assets/lottie/Multiindustry.mp4";
import { device } from "../../../constants/breakpoints";
import Next from "../../../assets/icons/mobile-next.svg";
import Prev from "../../../assets/icons/mobile-prev.svg";

const featureData = [
  {
    featureName: "Effortless Scheduling",
    descs: [
      "Eliminate the hassle of spreadsheets, emails, and complex software.",
      "Create and manage one or multiple schedules in minutes with an intuitive interface.",
    ],
    assetLink: feature1,
  },
  {
    featureName: "Empowered Employees",
    descs: [
      "Facilitate employee self-service: allow your team to view available shifts and select the ones that fit their preferences",
      "Create and manage one or multiple schedules in minutes with an intuitive interface.",
    ],
    assetLink: feature2,
  },
  {
    featureName: "Streamlined Communication",
    descs: [
      "Communicate directly with your team within the app and get customized notifications so you never miss an update.",
      "Reduce email clutter and last-minute scramble.",
    ],
    assetLink: feature3,
  },
  {
    featureName: "Boosted Productivity",
    descs: [
      "Gain real-time insights into team performance from a single dashboard, identify areas for improvement, and celebrate successes.",
      "Adapts to your unique business needs, keeping operations smooth and productive. No matter your team size, you'll have the tools you need to stay organized and efficient.",
    ],
    assetLink: feature4,
  },
  {
    featureName: "Compliance Confidence",
    descs: [
      "Avoid overscheduling - define the number of hours an employee can work to ensure compliance and avoid burnout (Ideal for Colleges)",
      "Ensure adherence to labor laws and regulations.",
    ],
    assetLink: feature5,
  },
  {
    featureName: "Simplified Management",
    descs: [
      "Generate insightful reports in various formats. Track key metrics and make data-driven decisions.",
      "Delegate tasks to specific shifts and individuals and empower sub-manager  to oversee specific teams or projects.",
    ],
    assetLink: feature6,
  },
  {
    featureName: "Multi-Industry Application",
    descs: [
      "Perfect for managers in colleges, hospitals, restaurants, small businesses, medium-sized enterprises, and large corporations.",
    ],
    assetLink: feature7,
  },
];

const FeaturesTab = () => {
  const [tabIndex, settabIndex] = useState(0);

  return (
    <TabView>
      <div className="list">
        {featureData.map((feature, index) => (
          <div
            key={index}
            onClick={() => settabIndex(index)}
            className={`list-item ${tabIndex === index ? "active" : ""}`}
          >
            <p className="list-text">{feature.featureName}</p>
            <p className="arrow">→</p>
          </div>
        ))}
      </div>
      <div className="list-mobile">
        {featureData.map((feature, index) => (
          <div className="tabs" key={index}>
            {tabIndex === index && (
              <div className="tablink">
                <h3>{feature.featureName}</h3>
                <div className="tab-controls">
                  <img
                    width={40}
                    onClick={() =>
                      tabIndex > 0
                        ? settabIndex(tabIndex - 1)
                        : settabIndex(featureData.length - 1)
                    }
                    src={Prev}
                  />
                  <img
                    width={40}
                    onClick={() =>
                      tabIndex < featureData.length - 1
                        ? settabIndex(tabIndex + 1)
                        : settabIndex(0)
                    }
                    src={Next}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="videos">
        {featureData.map((feature, index) => (
          <div key={index}>
            {tabIndex === index && (
              <ReactPlayer
                className="react-player"
                url={feature.assetLink}
                playing={true}
                loop={true}
                muted={true}
                wrapper={"div"}
                width="100%"
                height="100%"
              />
            )}
          </div>
        ))}
      </div>
      <div className="description">
        {featureData.map((feature, index) => (
          <div key={index}>
            {tabIndex === index && (
              <div className="description-items">
                {feature.descs.map((descItem, index) => (
                  <div key={index} className="description-item">
                    {index === 0 ? (
                      <img width={60} src={Icons.listIcon1} />
                    ) : (
                      <img width={60} src={Icons.listIcon2} />
                    )}
                    <h3>{descItem}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </TabView>
  );
};

export default FeaturesTab;

const TabView = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  gap: 1rem;

  @media ${device.largeTablet} {
    width: 100%;
    flex-direction: column;
    gap: 0.1rem;
  }

  .list-mobile {
    display: none;

    @media ${device.largeTablet} {
      display: flex;
      width: 100%;
      height: 70px;
      font-size: 18px;
      justify-content: flex-start;
      align-items: center;
      color: #29234f;

      .tabs {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .tablink {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 30px;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
      }

      .tab-controls {
        display: flex;
        gap: 20px;
        align-items: center;
      }
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 35%;
    @media ${device.largeTablet} {
      display: none;
    }
    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      padding: 0.5rem 0;
      font-size: 18px;
      font-weight: 500;
      color: #29234f;
      border-bottom: 1px solid #29234f;
      cursor: pointer;
      .arrow {
        font-weight: 700;
        font-size: 30px;
      }

      @media ${device.largeTablet} {
        display: none;
      }
    }

    .list-item:hover {
      color: #7b68ee;
      border-bottom: 1px solid #7b68ee;
    }
    .list-item.active {
      color: #7b68ee;
      border-bottom: 1px solid #7b68ee;
      transition: 0.3s all ease-in-out;
    }
  }

  .videos {
    width: 45%;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d9d9d9;
    @media ${device.largeTablet} {
      width: 100%;
    }
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    @media ${device.largeTablet} {
      width: 100%;
      justify-content: flex-start;
    }
    .description-items {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      padding-left: 30px;
      @media ${device.largeTablet} {
        padding-left: 0px;
        padding: 4rem 0;
      }

      .description-item {
        display: flex;
        align-items: center;
        gap: 1rem;

        h3 {
          font-size: 18px;
          font-weight: 400;
          @media ${device.largeTablet} {
            font-size: 20px;
          }
        }
        img {
          margin-top: 20px;
        }
      }
    }
  }
`;
