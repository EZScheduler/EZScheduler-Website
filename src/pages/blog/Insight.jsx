import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { AllArticlesData } from "./data/AllArticles";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { device } from "../../constants/breakpoints";
import { NavBar2 } from "../../components/NavBar2";
import Screenshot from "../../assets/images/screenshot-1.png";
import XIcon from "../../assets/icons/twitter.icon.svg";
import LnIcon from "../../assets/icons/linkedin.icon.svg";
import CopyIcon from "../../assets/icons/copy.icon.svg";
import client from "../../contentfulClient";
import { LoaderIcon } from "react-hot-toast";

const Insight = () => {
  const { title } = useParams();
  const [article, setArticle] = useState(null);
  const [includes, setIncludes] = useState(null);
  const [recommendedArticles, setRecommendedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .getEntries({ content_type: "article" })
      .then((response) => {
        setIncludes(response.includes);
        const foundArticle = response.items.find(
          (item) => item.fields.articleTitle === decodeURIComponent(title)
        );

        if (foundArticle) {
          const articleImage = response.includes.Asset.find(
            (asset) => asset.sys.id === foundArticle.fields.articleImage.sys.id
          );

          const formattedDate = format(
            new Date(foundArticle.fields.articleDate),
            "dd MMM, yyyy"
          );

          setArticle({
            ...foundArticle,
            fields: {
              ...foundArticle.fields,
              articleImage: `https:${articleImage.fields.file.url}`,
              articleDate: formattedDate,
            },
          });

          const filteredArticles = response.items.filter(
            (item) => item.fields.articleTitle !== decodeURIComponent(title)
          );

          const randomArticles = filteredArticles.slice(0, 3);

          setRecommendedArticles(randomArticles);
        } else {
          setError("Article not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred while fetching the article.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [title]);

  if (isLoading)
    return (
      <LoadingView>
        <LoaderIcon className="loading" />
      </LoadingView>
    );
  if (error) return <div>{error}</div>;

  if (!article) return null;

  const handleNavigation = (title) => {
    navigate(`/blog/${encodeURIComponent(title)}`);
  };

  return (
    <Layout>
      <BlogsHeroView>
        <div className="hero-text">
          <NavBar2 />
          <div className="info">
            <p>{article.fields.articleDate}</p>
            <h2 className="title">{article.fields.articleTitle}</h2>
            <p>{article.fields.articleDescription}</p>
          </div>
        </div>
        <div style={{
          backgroundImage : `url(${`${article.fields.articleImage}`})`,
          backgroundSize : 'cover',
          backgroundPosition : 'center center'
          
        }} className="hero-img"></div>

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
          {article.fields.subContentsRef.map((subContentRef) => {
            const subContent = includes.Entry.find(
              (entry) => entry.sys.id === subContentRef.sys.id
            );

            return (
              <div key={subContent.sys.id} className="subcontent">
                <h3>{subContentRef.fields.heading}</h3>
                <p>{subContentRef.fields.paragraph}</p>
                {subContentRef.fields.subImage && (
                  <img
                    src={`https:${
                      includes.Asset.find(
                        (asset) =>
                          asset.sys.id === subContent.fields.subImage.sys.id
                      ).fields.file.url
                    }`}
                    alt={subContent.fields.heading}
                  />
                )}
              </div>
            );
          })}
        </ArticleView>
      </ArticleDetailsView>

      <ExtraView>
        <div className="extras-container">
          <div className="extras-main">
            <div className="label">You may also like</div>
            <div className="recommended">
              {recommendedArticles.map((recommendedArticle) => {
                const recommendedImage = includes.Asset.find(
                  (asset) =>
                    asset.sys.id ===
                    recommendedArticle.fields.articleImage.sys.id
                );
                return (
                  <div
                    key={recommendedArticle.sys.id}
                    className="cell-container"
                    onClick={() =>
                      handleNavigation(recommendedArticle.fields.articleTitle)
                    }
                  >
                    <img src={`https:${recommendedImage.fields.file.url}`} />
                    <p className="tags-date">
                      {format(
                        new Date(recommendedArticle.fields.articleDate),
                        "dd MMM, yyyy"
                      )}
                    </p>
                    <h2 className="tags-title">
                      {recommendedArticle.fields.articleTitle}
                    </h2>
                    <p className="tags-desc">
                      {recommendedArticle.fields.articleDescription}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ExtraView>
    </Layout>
  );
};

export default Insight;

const LoadingView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .loading {
    width: 40px;
    height: 40px;
  }
`;
const BlogsHeroView = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;

  .blog-img {
    width: 900px;
    max-width: 100%;
    border-radius: 60px;
    margin: 4rem 0;
  }

  @media ${device.mobile} {
    border-radius: 20px;
  }

  .hero-img {
    width: 1000px;
    height: 500px;
    max-width: 100%;
    border-radius: 60px;
    margin: 4rem 0;
    
  }
  .hero-text {
    padding: 0.2rem 2rem 0rem 2rem;
    background-image: url("/images/pricing-bg.png");
    border-radius: 40px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;

    @media ${device.mobile} {
      padding: 0.2rem 1rem 0rem 1rem;
    }

    .info {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding-top: 2rem;
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
        width: 900px;
        max-width: 100%;
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

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const ShareView = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;

  @media ${device.mobile} {
    width: 80%;
  }
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
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
      background: #e5e1fc66;
      border-radius: 30px;
      cursor: pointer;
      color: #101323;
      font-size: 14px;
      font-weight: 400;
      padding: 0.5rem 4rem;
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
  padding-top: 0rem;
  @media ${device.mobile} {
    width: 80%;
  }

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
        color: #29234f;
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
          padding: 4rem 0;
          cursor: pointer;

          img {
            width: 100%;
            height: 260px;
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
