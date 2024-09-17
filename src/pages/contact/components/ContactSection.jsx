import React, { useState } from "react";
import styled from "styled-components";
import { NavBar } from "../../../components/NavBar";
import { Input } from "../../../components/Input";
import { ReactSVG } from "react-svg";
import { Icons } from "../../../assets/icons/icons";
import { device } from "../../../constants/breakpoints";
import toast from "react-hot-toast";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, message } = formData;
    return firstName && lastName && email && message;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://formspree.io/f/meojkpjb",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setLoading(false);
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("Please fill in the neceesarry field");
    }
  };

  return (
    <>
      <ContactView>
        <section>
          <NavBar />
          <div className="contact">
            <div className="text">
              <h2>Get in touch with us!</h2>
              <p className="ask">
                Got any question? Please fill out the form, and we’ll get back
                to you within 24 hours.
              </p>
              <div className="info">
                <p className="details">
                  <span>
                    <ReactSVG src={Icons.address} />
                  </span>{" "}
                  18 spring street, Poughkeepsie, NY 12601
                </p>
                <p className="details">
                  <span>
                    <ReactSVG src={Icons.phone} />
                  </span>{" "}
                  +1 (845) 214-2717
                </p>
                <p className="details">
                  <span>
                    <ReactSVG src={Icons.email} />
                  </span>{" "}
                  contact@ezscheduler.xyz
                </p>
              </div>
            </div>
          </div>
        </section>
      </ContactView>
      <FormView>
        <div className="form">
          <h2>Send us a message</h2>

          <DataView>
            <InputView>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </InputView>
            <InputView>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </InputView>
          </DataView>
          <DataView>
            <InputView>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </InputView>
            <InputView>
              <Input
                id="name"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number (optional)"
              />
            </InputView>
          </DataView>
          <DataView>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              required
            />
          </DataView>

          <div className="cta">
            <button
              className="approve"
              onClick={() => {
                handleSubmit();
              }}
            >
              {loading ? (
                <Oval
                  height={20}
                  width={20}
                  color="#c2bdbd"
                  secondaryColor="#ddd"
                />
              ) : (
                "Send your message"
              )}
            </button>

            <div className="line-icon">
              <ReactSVG src={Icons.line} />
            </div>
          </div>

          <Extras>
            <div className="email">
              <div className="icon">
                <ReactSVG src={Icons.email2} />
              </div>
              <div className="details">
                <h2>Prefer email?</h2>
                <div className="info">
                  <p>You can also reach us at</p>
                  <a href="mailto:contact@ezscheduler.xyz" className="link">
                    contact@ezscheduler.xyz
                  </a>
                </div>
              </div>
            </div>
            <div className="socials">
              <div className="icon">
                <ReactSVG src={Icons.message} />
              </div>
              <div className="details">
                <h2>How about socials?</h2>
                <div className="info">
                  <p>You can also reach us at</p>
                  <div className="links">
                    <a
                      href="https://www.linkedin.com/company/ez-scheduler-llc"
                      target="_blank"
                    >
                      <ReactSVG src={Icons.linkedInPurple} />
                    </a>
                    <a href="https://x.com/ezschedulerxyz" target="_blank">
                      <ReactSVG src={Icons.twitterPurple} />
                    </a>
                    <a href="#">
                      <ReactSVG src={Icons.facebookPurple} />
                    </a>
                    <a
                      href="https://www.instagram.com/ezschedulerxyz/"
                      target="_blank"
                    >
                      <ReactSVG src={Icons.instagramPurple} />
                    </a>
                    <a
                      href="https://www.youtube.com/@EZScheduler"
                      target="_blank"
                    >
                      <ReactSVG src={Icons.youtubePurple} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Extras>
        </div>
      </FormView>
    </>
  );
};

const ContactView = styled.div`
  position: relative;
  border-radius: 40px;
  background-image: url("/images/map.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${device.mobile} {
    width: 100%;
    border-radius: 20px;
  }

  section {
    padding: 0 2rem;
    display: flex;
    border-radius: 40px;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(
      to right,
      rgba(29, 1, 66, 0.9),
      rgba(151, 71, 255, 0.1)
    );

    @media ${device.mobile} {
      width: 100%;
      border-radius: 20px;
      padding: 0 1rem;
    }

    .contact {
      display: flex;
      padding: 3rem 0 5rem 3rem;
      /* margin-left: -2rem; */

      @media ${device.mobile} {
        align-items: center;
        justify-content: center;
        margin-left: 0;
        padding: 3rem 1rem 4rem 1rem;
      }

      .text {
        width: 58%;
        z-index: 1000;

        @media ${device.mobile} {
          width: 100%;
          margin: 0 auto;
          z-index: 10;
        }

        h2 {
          width: 73%;
          font-size: 74px;
          font-weight: 600;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.mobile} {
            width: 100%;
            font-size: 35px;
            line-height: 39px;
            text-align: center;
          }
        }

        .ask {
          width: 85%;
          font-size: 18px;
          font-weight: 300;
          line-height: 32px;
          padding: 1rem 0;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.mobile} {
            width: 100%;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
          }
        }

        .info {
          gap: 1rem;
          display: flex;
          padding: 2rem 2.5rem;
          border-radius: 28px;
          flex-direction: column;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid ${({ theme }) => theme.colors.grey.grey_20};

          @media ${device.mobile} {
            width: 100%;
            padding: 1rem;
          }

          .details {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: ${({ theme }) => theme.colors.white};

            span {
            }
          }
        }
      }
    }
  }
`;

const FormView = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: -2rem;
  border-radius: 40px 40px 0 0;
  background-image: url("/images/feature-bg.webp");
  background-size: cover;

  @media ${device.mobile} {
    width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 2rem 0 5rem 0;
  }

  .form {
    @media ${device.largeTablet} {
      width: 100%;
      padding: 0 1rem;
    }

    h2 {
      font-size: 75px;
      font-weight: 700;
      line-height: 84px;
      text-align: center;
      color: ${({ theme }) => theme.colors.blue.blue_30};

      @media ${device.mobile} {
        width: 100%;
        font-size: 35px;
        line-height: 39px;
      }
    }

    .cta {
      width: 100%;
      margin-top: 30px;
      margin-bottom: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media ${device.mobile} {
        margin-bottom: 3rem;
      }

      .approve {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        padding: 1.2rem 5rem;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors?.white};
        background-color: ${({ theme }) => theme.colors?.purple.purple_10};

        @media ${device.mobile} {
          width: 100%;
        }
      }

      .line-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 7rem;

        @media ${device.mobile} {
          margin-top: 3rem;

          svg {
            width: 100%;
          }
        }
      }
    }

    .extras {
      display: flex;
      gap: 2rem;

      .email {
        gap: 1rem;
        padding: 2rem;
        display: flex;
        align-items: end;
        border-radius: 28px;
        flex-direction: column;
        border: 1px solid ${({ theme }) => theme.colors?.grey.grey_20};

        .icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          border-radius: 16px;
          justify-content: center;
          background-color: #0c0a1c;
        }

        .details {
          h2 {
            font-size: 36px;
            font-weight: 600;
            line-height: 40px;
          }
        }
      }

      .socials {
        gap: 1rem;
        padding: 2rem;
        display: flex;
        align-items: end;
        border-radius: 28px;
        flex-direction: column;
        border: 1px solid ${({ theme }) => theme.colors?.grey.grey_20};

        .icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          border-radius: 16px;
          justify-content: center;
          background-color: #0c0a1c;
        }

        .details {
          h2 {
            font-size: 36px;
            font-weight: 600;
            line-height: 40px;
          }
        }
      }
    }
  }
`;

const DataView = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  gap: 2rem;

  .disabled {
    background-color: #f2f2f2;
    color: #999999;
  }

  .check {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 0;
    gap: 1rem;

    .radio-input {
    }
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 1rem;
    font-family: inherit;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid ${({ theme }) => theme.colors?.inputBackground};
    background-color: ${({ theme }) => theme.colors?.white};
    color: ${({ theme }) => theme.colors?.grey?.grey_30};
    outline: none;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors?.grey?.grey_30};
      font-size: 1rem;
      font-weight: 300;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;

const InputView = styled.div`
  width: 100%;
  position: relative;

  .input::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input::placeholder {
    color: ${({ theme }) => theme.colors.grey.grey_60};
  }

  .currency-input {
    width: 100%;
    height: 64px;
    outline: none;
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 300;
    text-indent: 15px;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors?.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors?.inputBackground};

    &:focus {
      background-color: ${({ theme }) => theme.colors?.white};
      border: 1px solid ${({ theme }) => theme.colors?.activeTitle};
    }

    &:disabled {
      background-color: #f2f2f2;
      color: #999999;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors?.placeholder};
      font-size: 1rem;
      font-weight: 300;
    }
  }

  select {
    padding: 0 1rem;
    margin-top: 5px;
    width: 100%;
    height: 54px;
    border-radius: 5px;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors?.inputBackground};
    color: ${({ theme }) => theme.colors?.grey?.grey_30};
  }

  .icon {
    background-color: transparent;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    position: absolute;
    top: 2.85rem;
    right: 12px;
    cursor: pointer;

    svg {
      transition: all 0.3s ease-in-out;
      transform: ${({ open }) => (open ? "rotate(180deg)" : "none")};
      transform-origin: 50% 50%;
      width: 20px;
      height: 15px;
    }
  }

  .input {
    position: relative;

    button {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      margin-top: 5px;
    }
  }

  .hint {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors?.info};
  }

  .error-label {
    font-size: 0.8rem;
    color: red;
    margin-top: 5px;
  }
`;

const LabelView = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors?.white};

  label {
    font-size: 1rem;
  }
`;

const Extras = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 -9rem;

  @media ${device.largeTablet} {
    margin: 0;
    width: 100%;
    flex-direction: column;
  }

  .email {
    gap: 1rem;
    width: 604px;
    padding: 2rem;
    display: flex;
    align-items: end;
    border-radius: 28px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors?.white};
    border: 1px solid ${({ theme }) => theme.colors?.grey.grey_20};

    @media ${device.largeTablet} {
      width: 100%;
      align-items: center;
    }

    .icon {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      border-radius: 16px;
      justify-content: center;
      background-color: #0c0a1c;
    }

    .details {
      width: 100%;
      text-align: start;
      padding: 2rem 5rem 2rem 0rem;

      @media ${device.mobile} {
        text-align: center;
        padding: 0;
      }

      h2 {
        font-size: 36px;
        font-weight: 600;
        line-height: 40px;
        color: ${({ theme }) => theme.colors?.purple.purple_10};

        @media ${device.mobile} {
          font-size: 30px;
        }
      }

      .info {
        gap: 1rem;
        display: flex;
        margin-top: 2rem;
        flex-direction: column;

        .link {
          font-size: 18px;
          font-weight: 600;
          line-height: 32px;
          text-decoration: underline;
          color: ${({ theme }) => theme.colors?.purple.purple_10};
        }
      }
    }
  }

  .socials {
    gap: 1rem;
    width: 604px;
    padding: 2rem;
    display: flex;
    align-items: end;
    border-radius: 28px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors?.white};
    border: 1px solid ${({ theme }) => theme.colors?.grey.grey_20};

    @media ${device.largeTablet} {
      width: 100%;
      align-items: center;
    }

    .icon {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      border-radius: 16px;
      justify-content: center;
      background-color: #0c0a1c;
    }

    .details {
      width: 100%;
      text-align: start;
      padding: 2rem 5rem 2rem 0rem;

      @media ${device.mobile} {
        text-align: center;
        padding: 0;
      }

      h2 {
        font-size: 36px;
        font-weight: 600;
        line-height: 40px;
        color: ${({ theme }) => theme.colors?.purple.purple_10};

        @media ${device.mobile} {
          font-size: 30px;
        }
      }

      .info {
        gap: 1rem;
        display: flex;
        margin-top: 2rem;
        flex-direction: column;

        .links {
          gap: 2rem;
          display: flex;
          padding: 1rem 0;

          @media ${device.mobile} {
            gap: 1rem;
            display: flex;
            justify-content: center;
            padding: 1rem 0;
          }
        }
      }
    }
  }
`;
