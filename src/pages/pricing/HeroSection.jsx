import React from "react";
import styled from "styled-components";
import { pricingData } from "../../constants/data";
import { ReactSVG } from "react-svg";
import { Icons } from "../../assets/icons/icons";
import { device } from "../../constants/breakpoints";
import { NavBar2 } from "../../components/NavBar2";

export const HeroSection = () => {
  return (
    <>
      <PricingView>
        <div className="hero-text">
          <NavBar2 />
          <div className="info">
            <h2 className="title">Find Your Perfect Fit</h2>

            <p>
              Choose your plan and start streamlining today! Sign up for our
              affordable solutions for a more productive workforce.
            </p>
          </div>
        </div>
      </PricingView>

      <PlansView>
        <div className="card-flex">
          {pricingData.map((plan, index) => {
            return (
              <Card key={index} isThird={index === 2}>
                <div className="top">
                  <div className="flex">
                    <h3 className="type">{plan.type}</h3>
                    {index === 2 && <Label> Recommended</Label>}
                  </div>
                  <p className="description">{plan.description}</p>

                  <div className="users">
                    <h2 className="user">{plan.users}</h2>
                    {plan.price.map((price, index) => {
                      return (
                        <div key={index} className="prices">
                          <p>{price.perUser}</p>
                          <p>{price.monthly}</p>
                          <p>{price.yearly}</p>
                        </div>
                      );
                    })}

                    <button>Contact us</button>
                  </div>
                </div>
                <div className="bottom">
                  <h3 className="feature-name">{plan.name}</h3>
                  <div className="features">
                    {plan.features.map((feature, index) => {
                      return (
                        <div key={index} className="feature">
                          <ReactSVG src={Icons.check} />
                          {/* <img src={Icons.check} alt="" /> */}
                          <p className="feature-text">{feature.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </PlansView>
      <ExtraView>
        <div className="enterprise">
          <div className="plan">
            <h3>EZ-Enterprise</h3>
            <p>For large corporations needing custom solutions</p>
            <p>Custom pricing</p>
          </div>
          <button>Contact Sales</button>
        </div>

        <div className="disclaimer">
          <h2>Disclaimer:</h2>
          <p>
            Pricing is in USD and is subject to change without notice and may
            vary upon official launch. Please contact our sales team for the
            most up-to-date pricing information. Customer Support: For any
            questions or assistance, please contact our support team at
            support@ezscheduler.xyz or call us at +1 (800) 555-1212. Sales
            Inquiries: For sales inquiries or to discuss custom pricing options,
            please contact our sales team at support@ezscheduler.xyz or call us
            at +1 (800) 555-1213.
          </p>
        </div>
      </ExtraView>
    </>
  );
};

const PricingView = styled.div`
  border-radius: 40px;
  padding-bottom: 10rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.purple.purple_10};
  background-image: url("https://res.cloudinary.com/doi40g1ct/image/upload/v1723735567/EZ-Scheduler/pricing-bg_ktgjgl.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media ${device.mobile} {
    border-radius: 20px;
  }

  .hero-text {
    padding: 0.2rem 2rem 0rem 2rem;

    @media ${device.mobile} {
      padding: 0.2rem 1rem 0rem 1rem;
    }

    .info {
      display: flex;
      padding: 4rem 0;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.blue.blue_10};

      @media ${device.mobile} {
        padding: 2rem 0;
      }

      .title {
        width: 90%;
        font-size: 74px;
        font-weight: 600;
        line-height: 84px;
        padding: 1rem 0;
        padding-top: 2rem;
        color: ${({ theme }) => theme.colors.blue.blue_30};

        @media ${device.mobile} {
          width: 100%;
          font-size: 35px;
          font-weight: 700;
          line-height: 39px;
        }
      }

      p {
        width: 50%;
        font-size: 18px;
        font-weight: 300;
        line-height: 32px;
        padding: 1rem 0;
        color: ${({ theme }) => theme.colors.purple.purple_40};

        @media ${device.mobile} {
          width: 100%;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }

    }
  }
`;

const PlansView = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  margin: 0 3rem;
  margin-top: -10rem;

  @media ${device.mobile} {
    margin: 0 1rem;
    margin-top: -10rem;
  }

  .card-flex {
    display: flex;
    gap: 1rem;

    @media ${device.mobile} {
      flex-direction: column;
    }
  }
`;

const Label = styled.span`
  font-size: 10px;
  font-weight: 600px;
  line-height: 16px;
  padding: 0.2rem 0.5rem;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(to right, #8930fd 0%, #47cdd0 100%);
`;

const Card = styled.div`
  width: 40%;
  padding: 2rem 1rem;
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.colors.purple.purple_60};
  background-color: ${({ theme, isThird }) =>
    isThird ? theme.colors.blue.blue_60 : theme.colors.white};

    @media ${device.mobile} {
      width: 100%;
    }

  .top {
    gap: 1rem;
    display: flex;
    flex-direction: column;

    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .type {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        color: ${({ theme, isThird }) =>
          isThird ? theme.colors.white : theme.colors.blue.blue_30};
      }
    }

    .description {
      width: 90%;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      color: ${({ theme, isThird }) =>
        isThird ? theme.colors.white : theme.colors.purple.purple_40};
    }

    .users {
      .user {
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
        color: ${({ theme, isThird }) =>
          isThird ? theme.colors.white : theme.colors.blue.blue_30};
      }

      .prices {
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: ${({ theme, isThird }) =>
            isThird ? theme.colors.grey.grey_20 : theme.colors.grey.grey_30};
        }
      }

      button {
        margin: 2rem 0;
        width: 100%;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        padding: 1.2rem 2rem;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme, isThird }) =>
          isThird ? theme.colors.purple.purple_10 : theme.colors.blue.blue_10};
      }
    }
  }

  .bottom {
    margin: 1rem 0;

    .feature-name {
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      color: ${({ theme, isThird }) =>
        isThird ? theme.colors.white : theme.colors.blue.blue_10};
    }
    .features {
      gap: 0.5rem;
      display: flex;
      margin: 1rem 0 0 0;
      flex-direction: column;

      .feature {
        gap: 0.5rem;
        display: flex;

        .feature-text {
          font-size: 14px;
          font-weight: 300;
          line-height: 22px;
          color: ${({ theme, isThird }) =>
            isThird ? theme.colors.white : theme.colors.blue.blue_10};
        }
      }
    }
  }
`;

const ExtraView = styled.div`
  margin: 0 3rem;
  margin-bottom: 3rem;

  @media ${device.mobile} {
    margin: 0 1rem;
    margin-bottom: 3rem;
  }

  .enterprise {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 28px;
    border: 1px solid ${({ theme }) => theme.colors.purple.purple_60};

    @media ${device.mobile} {
      padding: 2rem 1rem;
      flex-direction: column;
    }

    .plan {
      h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.blue.blue_30};
      }

      p {
        width: 90%;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.purple.purple_40};
      }

      @media ${device.mobile} {
        margin-bottom: 2rem;
      }
    }

    button {
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      padding: 1.2rem 3rem;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue.blue_10};

      @media ${device.mobile} {
        width: 100%;
      }
    }
  }

  .disclaimer {
    margin: 2rem 0;

    h2 {
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.blue.blue_30};
    }

    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.purple.purple_40};
    }
  }
`;
