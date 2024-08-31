import React from "react";
import { useParams } from "react-router-dom";
import { AllArticlesData } from "./data/AllArticles";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { device } from "../../constants/breakpoints";
import { NavBar2 } from "../../components/NavBar2";
import Screenshot from "../../assets/images/screenshot-1.png";
import XIcon from "../../assets/icons/twitter.icon.svg";
import LnIcon from "../../assets/icons/linkedin.icon.svg";
import CopyIcon from "../../assets/icons/copy.icon.svg";

const Insight = () => {
  const { title } = useParams();
  const article = AllArticlesData.find(
    (article) => article.articleTitle === decodeURIComponent(title)
  );

  return (
    <Layout>
      {article ? (
        <>
          <BlogsHeroView>
            <div className="hero-text">
              <NavBar2 />
              <div className="info">
                <p>{article.articleDate}</p>
                <h2 className="title">{article.articleTitle}</h2>
                <p>{article.articleDesc}</p>
                <img src={article.articleImg} alt={article.articleTitle} />
              </div>
            </div>
          </BlogsHeroView>

          <ArticleDetailsView>
            <ShareView>
              <div className="share-container">
                <img
                  className="screenshot"
                  src={Screenshot}
                  alt="EZ scheduler screenshot"
                />
                <h3>Get started now. Join our waitlist</h3>
                <button className="btn">
                  <span>Get started</span>
                </button>
              </div>
              <div className="share-links">
                <div className="link">
                  <div className="link-container">
                    <span>Share</span>
                    <img width={30} height={30} src={XIcon} alt="X icon" />
                  </div>
                </div>
                <div className="link">
                  <div className="link-container">
                    <span>Share</span>
                    <img width={30} height={30} src={LnIcon} alt="Linkedin icon" />
                  </div>
                </div>
                <div className="link">
                  <div className="link-container">
                    <span>Copy</span>
                    <img width={30} height={30} src={CopyIcon} alt="Copy icon" />
                  </div>
                </div>
              </div>
            </ShareView>
            <ArticleView>
              <div className="subcontent">
                <h3>{article.subContent1.heading}</h3>
                <p>{article.subContent1.paragraph}</p>
              </div>
              <div className="subcontent">
                <h3>{article.subContent2.heading}</h3>
                <p>{article.subContent2.paragraph}</p>
                <img
                  src={article.subContent2.subImage}
                  alt={article.subContent2.subImage}
                />
              </div>
              <div className="subcontent">
                <h3>{article.subContent3.heading}</h3>
                <p>{article.subContent3.paragraph}</p>
              </div>
              <div className="subcontent">
                <h3>{article.subContent4.heading}</h3>
                <p>{article.subContent4.paragraph}</p>
                <img
                  src={article.subContent4.subImage}
                  alt={article.subContent4.subImage}
                />
              </div>
              <div className="subcontent">
                <h3>{article.subContent5.heading}</h3>
                <p>{article.subContent5.paragraph}</p>
              </div>
            </ArticleView>
          </ArticleDetailsView>

          <ExtraView>
            <div className="extras-container">
              <div className="extras-main">
                <div className="label">You may also like</div>
                <div className="recommended">
                  <div className="cell-container">
                    <img src={article.articleImg} />
                    <p className="tags-date">{article.articleDate}</p>
                    <h2 className="tags-title">{article.articleTitle}</h2>
                    <p className="tags-desc">{article.articleDesc}</p>
                  </div>
                  <div className="cell-container">
                    <img src={article.articleImg} />
                    <p className="tags-date">{article.articleDate}</p>
                    <h2 className="tags-title">{article.articleTitle}</h2>
                    <p className="tags-desc">{article.articleDesc}</p>
                  </div>
                  <div className="cell-container">
                    <img src={article.articleImg} />
                    <p className="tags-date">{article.articleDate}</p>
                    <h2 className="tags-title">{article.articleTitle}</h2>
                    <p className="tags-desc">{article.articleDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </ExtraView>
        </>
      ) : (
        <p>Article not found</p>
      )}
    </Layout>
  );
};

export default Insight;

const BlogsHeroView = styled.div`
  border-radius: 40px;
  padding-bottom: 10rem;
  background-image: url("/images/pricing-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;

  @media ${device.mobile} {
    border-radius: 20px;
  }

  .hero-text {
    padding: 0.2rem 2rem 0rem 2rem;
    width: 100%;

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
      width: 100%;
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

      img {
        width: 90%;
        border-radius: 60px;
        margin: 4rem 0;
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

const ArticleDetailsView = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
`;

const ShareView = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  .share-container {
    width: 100%;
    background: linear-gradient(137.48deg, #8930fd 12.39%, #47cdd0 92.5%);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 2rem 1rem;

    .btn {
      z-index: 10;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      padding: 1.2rem 3.5rem;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.white};

      span {
        background: linear-gradient(to right, #8930fd 0%, #47cdd0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media ${device.mobile} {
      }
    }
  }

  .share-links {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    .link {
     display: flex
     align-items: center;
     justify-content: center;
     width: 30%;
     background: #E5E1FC66;
     border-radius: 30px;
     cursor: pointer;
     color: #101323;
     font-size: 14px;
     font-weight: 400;
     padding: .5rem 4rem;
    }

    .link-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }

  .screenshot {
    width: 80%;
  }

  h3 {
    width: 80%;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #ffffff;
  }
`;

const ArticleView = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  padding: 4rem 0;

  .subcontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
  h3 {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.blue.blue_30};

    @media ${device.mobile} {
      width: 100%;
      font-size: 35px;
      font-weight: 700;
      line-height: 39px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.purple.purple_40};

    @media ${device.mobile} {
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
  img {
    width: 100%;
    border-radius: 40px;
  }
`;

const ExtraView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(71, 205, 208, 0.1) 0%,
    rgba(71, 205, 208, 0) 100%
  );
  border-radius: 20px 20px 0 0;
  .extras-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: flex-start;
    padding: 6rem 0;

    .extras-main {
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: flex-start;
      width: 100%;
      .label {
        font-size: 52px;
        font-weight: 700;
        line-height: 64px;
        color: #29234F;
      }
      .recommended {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .cell-container {
          width: 30%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: flex-start;

          img {
            width: 100%;
            border-radius: 40px;
          }
          .tags-date {
            font-size: 12px;
            font-weight: 400;
            color: #475467;
          }
          .tags-title {
            font-size: 32px;
            font-weight: 600;
            line-height: 30px;
            color: ${({ theme }) => theme.colors.blue.blue_30};
          }

          .tags-desc {
            font-size: 14px;
          }
        }

        .video-tags {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 12px;

          .tags-label {
            background-color: #47cdd01a;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            color: #47cdd0;
            padding: 8px;
          }
        }
      }
    }
  }

  h2 {
    width: 80%;
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.blue.blue_30};
  }
  .button-more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      font-size: 14px;
      font-weight: 700;
      color: #7b68ee;
      background: white;
      border: 1px solid #7b68ee;
      border-radius: 6px;
      padding: 1rem 2rem;
      cursor: pointer;
    }
  }
`;
