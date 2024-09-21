import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import carets from "../../../assets/icons/carets.svg";
import { ReactSVG } from "react-svg";
import { Icons } from "../../../assets/icons/icons";
import light from "../../../assets/images/light.webp";
import light2 from "../../../assets/images/mobile-ellipse.webp";
import { device } from "../../../constants/breakpoints";
import slide1 from "../../../assets/images/slide1.png";
import slidescreen1 from "../../../assets/images/slidescreen1.png";
import slide2 from "../../../assets/images/slide2.png";
import slidescreen2 from "../../../assets/images/slidescreen2.png";
import slide3 from "../../../assets/images/slide3.png";
import slidescreen3 from "../../../assets/images/slidescreen3.png";
import slide4 from "../../../assets/images/slide4.png";
import slidescreen4 from "../../../assets/images/slidescreen4.png";
import slide5 from "../../../assets/images/slide5.png";
import slidescreen5 from "../../../assets/images/slidescreen5.png";
import slide6 from "../../../assets/images/slide6.png";
import slidescreen6 from "../../../assets/images/slidescreen6.png";
import slide7 from "../../../assets/images/slide7.png";
import slidescreen7 from "../../../assets/images/slidescreen7.png";
import slide8 from "../../../assets/images/slide8.png";
import slidescreen8 from "../../../assets/images/slidescreen8.png";
import axios from "axios";
import toast from "react-hot-toast";
import fileDownload from "js-file-download";
import { useNavigate } from "react-router-dom";
import Laptop2 from "../../../assets/images/laptop2.webp";
import { useSwipeable } from "react-swipeable";

const Carousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slideWidth, setSlideWidth] = useState(window.innerWidth);
  const [holding, setHolding] = useState(false);
  const autoSlideInterval = useRef(null);

  const pdfFileUrl =
    "https://res.cloudinary.com/doi40g1ct/image/upload/v1723815396/EZ-Scheduler/EZ_Story_compressed_blk2yg.pdf";

  const handleFileDownload = (url, filename) => {
    setLoading(true);
    const parts = filename.split("/");
    const newFileName = parts[parts.length - 1];
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, newFileName);
        toast.success("Pdf downloaded successfully.");
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!holding) {
      startAutoSlide();
    }

    return () => clearInterval(autoSlideInterval.current);
  }, [currentSlide, holding]);

  const startAutoSlide = () => {
    clearInterval(autoSlideInterval.current); // Clear any previous interval
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 400000); // Change slide every 4 seconds
  };

  const handleMouseDown = () => {
    setHolding(true);
    clearInterval(autoSlideInterval.current);
  };

  const handleMouseUp = () => {
    setHolding(false);
    startAutoSlide();
  };

  useEffect(() => {
    const handleResize = () => {
      setSlideWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = 9;

  const handleNext = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <CarouselContainer
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <CarouselWrapper {...handlers} translate={-currentSlide * slideWidth}>
        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>
                <div className="post-title-2">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <p className="description">
                  EZ Scheduler is built by experienced managers to make
                  scheduling and productivity tracking easy for managers across
                  all industries, whether you manage a team in a college,
                  hospital, restaurant, small business, or large corporation.
                </p>

                <div className="actions">
                  <button
                    className="filled"
                    onClick={() => {
                      navigate("/our-story");
                    }}
                  >
                    Read our story
                  </button>
                  <button
                    className="outlined"
                    onClick={() =>
                      handleFileDownload(pdfFileUrl, "EZ-Story.pdf")
                    }
                  >
                    <span>
                      <ReactSVG src={Icons.pdf} />
                    </span>
                    <span>
                      {loading ? "Downloading PDF..." : "Read our story"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              className="light"
              draggable="false"
            />
            <img
              src={light2}
              width={"100%"}
              className="light2"
              draggable="false"
            />
            <img
              src={Laptop2}
              width={"60%"}
              alt="laptop image"
              className="laptop-img"
              draggable="false"
            />
          </div>
        </Slide>
        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide1} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen1} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>

        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide2} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen2} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>

        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide3} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen3} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>

        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide4} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen4} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>

        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide5} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen5} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>

        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide6} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen6} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>

        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide7} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen7} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>

        <Slide>
          <div className="bottom">
            <div className="bottom-container">
              <div className="read-post2">
                <div className="post-title">
                  <h2>
                    Welcome to the{" "}
                    <img src={Icons.ezSide} width={60} className="logo" /> side
                  </h2>
                </div>

                <div className="details">
                  <div className="details-text">
                    {/* <h3>Employee Self Service.</h3>
                    <p>
                      give employees flexibility to Select Shifts Based On Your
                      Parameters
                    </p> */}
                    <img src={slide8} alt="slide1" draggable="false" />
                  </div>
                  <div className="details-image">
                    <img src={slidescreen8} alt="slide1" draggable="false" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src={light}
              width={"100%"}
              alt="background image"
              className="light"
            />
            <img
              src={light2}
              width={"100%"}
              alt="background image"
              className="light2"
            />
          </div>
        </Slide>
      </CarouselWrapper>
      {/* <PrevButton onClick={handlePrev}>‹</PrevButton>
      <NextButton onClick={handleNext}>›</NextButton> */}
      <DotsContainer>
        <div className="indicator">
          {Array(totalSlides)
            .fill()
            .map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => handleDotClick(index)}
              />
            ))}
        </div>
        <img onClick={handleNext} className="next-slide" src={carets} />
      </DotsContainer>
    </CarouselContainer>
  );
};

const CarouselSlider = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default CarouselSlider;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%; /* Full width for responsiveness */
  margin: 0 auto;
  overflow: hidden;
  border-radius: 40px;
  user-select: none;
  cursor: grab;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
  position: relative;
  @media ${device.mobile} {
    gap: 20px;
  }
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;

  .bottom {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 90vh;
    border-radius: 40px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue.blue_50};

    .light {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;

      @media ${device.mobile} {
        display: none;
      }
      /* z-index: -1; */
    }

    .light2 {
      display: none;

      @media ${device.mobile} {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
      }
    }

    .laptop-img {
      position: absolute;
      bottom: 0;
      right: 0;
      @media ${device.mobile} {
        left: 50%;
        transform: translateX(-50%);
        right: unset;
      }
    }
  }

  .bottom-container {
    padding: 5rem;
    width: 100%;

    @media ${device.mobile} {
      padding: 2rem;
      border-radius: 20px;
    }

    .read-post2 {
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 8rem;
      position: relative;
      width: 100%;

      @media ${device.mobile} {
        width: 100%;
      }

      .details {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media ${device.largeTablet} {
          flex-direction: column;
          align-items: center;
          gap: 5rem;
        }
        .details-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 40%;
          text-align: center;
          @media ${device.largeTablet} {
            width: 100%;
            img {
              width: 100%;
            }
          }
          h3 {
            font-size: 30px;
            font-weight: 700;
          }

          p {
            font-size: 18px;
            font-weight: 300;
            width: 80%;
          }
        }
        .details-image {
          width: 50%;
          @media ${device.largeTablet} {
            width: 100%;
          }
          img {
            max-width: 100%;
          }
        }
      }

      .post-title {
        display: flex;
        align-items: center;

        @media ${device.largeTablet} {
          display: none;
        }

        h2 {
          z-index: 10;
          font-size: 75px;
          font-weight: 700;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.largeTablet} {
            width: 100%;
            font-size: 35px;
            line-height: 39px;
          }

          .ez-icon {
            display: inline-flex;
          }

          .logo {
            position: relative;
            top: 15px;
          }
        }

        svg {
          width: 80px;
          margin-bottom: -1rem;

          @media ${device.mobile} {
            font-size: 20px;
            /* line-height: 39px; */
          }
        }

        span {
          z-index: 10;
          font-size: 75px;
          font-weight: 700;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.mobile} {
            font-size: 35px;
            line-height: 39px;
          }
        }
      }
    }
    .read-post {
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
      position: relative;
      width: 100%;

      @media ${device.largeTablet} {
        width: 100%;
        align-items: center;
        text-align: center;
      }

      .details {
        width: 100%;
        display: flex;
        align-items: center;
        .details-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 40%;
          text-align: center;
          h3 {
            font-size: 30px;
            font-weight: 700;
          }

          p {
            font-size: 18px;
            font-weight: 300;
            width: 80%;
          }
        }
      }
      .post-title {
        display: flex;
        align-items: center;
        span {
          z-index: 10;
          font-size: 75px;
          font-weight: 700;
          line-height: 84px;
          color: rgb(255, 255, 255);
        }

        @media ${device.largeTablet} {
          display: none;
        }

        h2 {
          z-index: 10;
          font-size: 75px;
          font-weight: 700;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.largeTablet} {
            width: 100%;
            font-size: 35px;
            line-height: 39px;
          }

          .logo {
            position: relative;
            top: 15px;
          }
        }

        svg {
          width: 80px;
          margin-bottom: -1rem;

          @media ${device.mobile} {
            font-size: 20px;
            /* line-height: 39px; */
          }
        }
      }

      .post-title-2 {
        display: none;
        align-items: center;

        .icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media ${device.largeTablet} {
          display: flex;
          flex-direction: column;
        }

        h2 {
          z-index: 10;
          font-size: 75px;
          font-weight: 700;
          line-height: 84px;
          color: ${({ theme }) => theme.colors.white};

          @media ${device.mobile} {
            width: 100%;
            font-size: 35px;
            line-height: 39px;
            text-align: center;
          }

          .logo {
            position: relative;
            top: 15px;
            @media ${device.largeTablet} {
              max-width: 40px;
            }
          }
        }

        svg {
          width: 80px;
          margin-bottom: -1rem;

          @media ${device.mobile} {
            font-size: 20px;
            /* line-height: 39px; */
          }
        }
      }

      @media ${device.mobile} {
        display: flex;
        flex-direction: column;

        h2 {
          width: 100%;
          font-size: 35px;
          line-height: 39px;
          text-align: center;
        }
      }
    }

    .description {
      z-index: 10;
      width: 60%;
      margin: 2rem 0;
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;

      @media ${device.mobile} {
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
    }

    .actions {
      display: flex;
      gap: 2rem;

      @media ${device.mobile} {
        flex-direction: column;
      }

      .filled {
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        border-radius: 5px;
        padding: 1.2rem 4rem;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.purple.purple_10};
      }

      .outlined {
        gap: 1rem;
        border: none;
        display: flex;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        border-radius: 5px;
        align-items: center;
        padding: 1.2rem 3.5rem;
        justify-content: center;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.purple.purple_10};
      }
    }
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem;
  z-index: 15;

  @media ${device.largeTablet} {
    left: 50%;
    transform: translateX(-50%);
  }

  .indicator {
    display: flex;
    gap: 4px;
    align-items: center;
    border: 1px solid #49ccf9;
    border-radius: 10px;
    padding: 8px;
  }

  .next-slide {
    cursor: pointer;
    width: 24px;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#7B68EE" : "#ffffff8e")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7b68ee;
  }
`;
