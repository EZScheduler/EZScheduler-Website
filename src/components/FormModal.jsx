import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { device } from "../constants/breakpoints";
import { ReactSVG } from "react-svg";
import { Icons } from "../assets/icons/icons";
import { CongratsModal } from "./CongratsModal";
import * as yup from "yup";
import { Oval } from "react-loader-spinner";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Work Email is required"),
  industry: yup.string().required("Industry is required"),
  country: yup.string().required("Country is required"),
});

export const FormModal = ({ showModal, setShowModal }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const options = [
    { value: "College & University", label: "College & University" },
    { value: "Hospital", label: "Hospital" },
    { value: "Restaurant", label: "Restaurant" },
    { value: "Small Businesses", label: "Small Business" },
    { value: "Medium-Sized Enterprise", label: "Medium-Sized Enterprise" },
    { value: "Large Corporation", label: "Large Corporation" },
    { value: "Government Agency", label: "Government Agency" },
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://formspree.io/f/xldrddaj",
        data,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      reset();
      setLoading(false);
      setShowModal(!showModal);
      setShowSuccessModal(true);
    } catch (error) {
      toast.error("There was an error submitting the form");
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <ModalView
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal-overlay"
        >
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ======== Content ======== */}
            <ModalContent>
              <div
                className="header"
                onClick={() => {
                  setShowModal(!showModal);
                  reset();
                }}
              >
                <ReactSVG src={Icons.cancel} />
              </div>
              <ContentView>
                <HeaderView>
                  <div className="text">
                    <h3>Stay in the loop</h3>
                    <p>Be first in line for special offers & updates</p>
                  </div>
                  {/* <div className="close" onClick={() => setShowModal(!showModal)}>
                    X
                  </div> */}
                </HeaderView>
                <Content>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <DataView>
                      <InputView>
                        <LabelView>
                          <label htmlFor="name">Full Name</label>
                        </LabelView>
                        <Input
                          id="name"
                          type="text"
                          {...register("name")}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <span className="error-label">{errors.name.message}</span>}
                      </InputView>

                      <InputView>
                        <LabelView>
                          <label htmlFor="email"> Work Email</label>
                        </LabelView>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="Enter your work email"
                        />
                        {errors.email && <span className="error-label">{errors.email.message}</span>}
                      </InputView>
                    </DataView>

                    <DataView>
                      <InputView>
                        <LabelView>
                          <label htmlFor="telephone">
                            Phone number (Optional)
                          </label>
                        </LabelView>
                        <Input
                          id="telephone"
                          type="telephone"
                          {...register("telephone")}
                          placeholder="(555) 555-5555"
                        />
                        {errors.telephone && (
                          <span className="error-label">
                            {errors.telephone.message}
                          </span>
                        )}
                      </InputView>

                      <InputView>
                        <LabelView>
                          <label htmlFor="industry">Industry</label>
                        </LabelView>
                        <select
                          id="industry"
                          name="industry"
                          {...register("industry")}
                        >
                          <option value="" selected="" disabled="">
                            Select an industry
                          </option>
                          {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        {errors.industry && (
                          <span className="error-label">{errors.industry.message}</span>
                        )}
                      </InputView>
                    </DataView>

                    <DataView>
                      <InputView>
                        <LabelView>
                          <label htmlFor="country">Country or Location</label>
                        </LabelView>
                        <Input
                          id="country"
                          type="text"
                          {...register("country")}
                          placeholder="e.g USA, Canada..."
                        />
                        {errors.country && (
                          <span className="error-label">{errors.country.message}</span>
                        )}
                      </InputView>

                      {/* <InputView>
                        <LabelView>
                          <label htmlFor='industry'>Email</label>
                        </LabelView>
                        <select 
                          id="industry" 
                          name="industry" 
                          value={formData.industry}
                          onChange={handleChange}
                          required=""
                        >
                            <option value="" selected="" disabled="">Select</option>
                            {options.map((option) => (
                              <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                      </InputView> */}
                    </DataView>

                    <div className="cta">
                      <button
                        type="submit"
                        className="approve"
                      >
                        {loading ? (
                          <Oval
                            height={20}
                            width={20}
                            color="#c2bdbd"
                            secondaryColor="#ddd"
                          />
                        ) : (
                          "Join the EZ Side"
                        )}
                      </button>
                    </div>
                  </form>
                </Content>
              </ContentView>
            </ModalContent>
          </motion.div>
        </ModalView>
      )}

      <CongratsModal
        showModal={showSuccessModal}
        setShowModal={setShowSuccessModal}
      />
    </AnimatePresence>
  );
};

const ModalView = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9009;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    z-index: 30000;
    position: fixed;
    border-radius: 4px;
    width: 50vw;
    padding: 30px 20px;
    padding-top: 0;
    padding-bottom: 20px;
    border-radius: 15px;
    max-height: 90%;
    overflow-y: scroll;
    background: linear-gradient(to right, #33214a 0%, #2a464d 100%);

    @media ${device.mobile} {
      width: 95vw;
      padding: 30px 0;
    }
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 20px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({ theme }) => theme.colors?.white};
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;

    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media ${device.mobile} {
    padding: 10px 20px;
    padding-bottom: 20px;
  }
`;

const ContentView = styled.div`
  width: 100%;
`;

const HeaderView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  @media ${device.mobile} {
    /* display: block; */
  }

  .text {
    h3 {
      font-size: 3rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors?.white};

      @media ${device.mobile} {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors?.white};
      margin-top: 10px;

      @media ${device.mobile} {
        font-size: 0.9rem;
      }
    }
  }

  .close {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background-color: #f3f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
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
    /* -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; */
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

const ButtonView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 40px 0;

  .btn-disabled {
    cursor: not-allowed;
    color: #f2f2f2;
    background-color: ${({ theme }) => theme.colors?.info};
  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 30px;

  .info {
    width: 100%;
    background-color: ${(props) => props.theme.colors?.warningBackground};
    border-radius: 6px;
    padding: 14px;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 10px;
    }

    p {
      font-size: 0.9rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors?.secondary};
    }
  }

  .input-view {
    width: 100%;
    margin-top: 30px;

    .calendar {
      border-radius: 1rem;
      margin-bottom: 2rem;
    }

    label {
      font-size: 0.875rem;
    }

    .select-view {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-bottom: 20px;
      margin-top: 8px;

      .select-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;

        .checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            cursor: pointer;
            accent-color: ${(props) => props.theme.colors?.secondary};
            color: ${(props) => props.theme.colors?.primary};
          }

          label {
            font-size: 1rem;
            font-weight: 500;
            color: ${(props) => props.theme.colors?.secondary};
            cursor: pointer;
          }
        }
      }
    }
  }

  .cta {
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .approve {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      padding: 1.2rem 2rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors?.white};
      background-color: ${({ theme }) => theme.colors?.purple.purple_10};
    }
  }
`;

const Input = styled.input`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "54px"};
  padding: ${({ icon }) => (icon ? "0 16px 0 48px" : "0 16px")};
  background-color: ${({ theme, error }) =>
    error ? theme.colors?.errorBackground : theme.colors?.white};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors?.error : theme.colors?.inputBackground};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors?.grey?.grey_30};
  outline: none;
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.2s ease-in-out;
  margin-top: 5px;

  &:focus {
    background-color: ${({ theme, error }) =>
      error ? theme.colors?.errorBackground : theme.colors?.white};
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors?.error : theme.colors?.activeTitle};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors?.grey?.grey_30};
    font-size: 1rem;
    font-weight: 300;
  }

  &:disabled {
    color: #999999;
    background-color: #f2f2f2;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
