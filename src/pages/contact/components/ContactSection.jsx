import React, { useState } from "react";
import styled from "styled-components";
import { NavBar } from "../../../components/NavBar";
import { Input } from "../../../components/Input";
import { ReactSVG } from "react-svg";
import { Icons } from "../../../assets/icons/icons";
import { device } from "../../../constants/breakpoints";
import toast from "react-hot-toast";
import axios from "axios";

export const ContactSection = () => {
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

  const handleSubmit = async () => {
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
      toast.success("Form submitted successfully!");
    } catch (error) {
      setStatus("Failed to submit the form.");
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
                Got any question? Please fillout the form, and we'll get back to
                you ASAP or you can reach us through our social media platforms
                or email us.
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
              // type="submit"
              className="approve"
              onClick={() => {
                handleSubmit();
              }}
            >
              Send your message
            </button>
          </div>
        </div>
      </FormView>
    </>
  );
};

const ContactView = styled.div`
  position: relative;
  border-radius: 40px;
  background-image: url("https://res.cloudinary.com/doi40g1ct/image/upload/v1722701804/EZ-Scheduler/map_a55zsp.png");
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
    align-items: center;
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
      padding: 3rem 0 5rem 0;
      margin-left: -2rem;

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
          width: 80%;
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
          width: 90%;
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
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0;

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
  background-image: url("https://res.cloudinary.com/doi40g1ct/image/upload/v1722812293/EZ-Scheduler/feature-bg_zx7jpi.png");
  background-size: cover;

  @media ${device.mobile} {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  .form {
    @media ${device.mobile} {
      width: 100%;
      padding: 0 1rem;
    }

    h2 {
      font-size: 75px;
      font-weight: 700;
      line-height: 84px;
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
    color: ${({ theme }) => theme.colors.error_200};
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