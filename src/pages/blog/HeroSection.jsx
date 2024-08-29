import React from "react";
import styled from "styled-components";
import { pricingData } from "../../constants/data";
import { ReactSVG } from "react-svg";
import { Icons } from "../../assets/icons/icons";
import BlogImg1 from "../../assets/images/blog-img.jpeg.jfif";
import { device } from "../../constants/breakpoints";
import { NavBar2 } from "../../components/NavBar2";

export const HeroSection = () => {
  const FeaturedOtherData = [
    {
      id: 1,
      articleImg: BlogImg1,
      articleDate: "02 May, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
    },
    {
      id: 2,
      articleImg: BlogImg1,
      articleDate: "02 May, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
    },
    {
      id: 3,
      articleImg: BlogImg1,
      articleDate: "02 May, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
    },
    {
      id: 4,
      articleImg: BlogImg1,
      articleDate: "02 May, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
    },
  ];
  const AllArticlesData = [
    {
      id: 1,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 2,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 3,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 4,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 5,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 6,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 7,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 8,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
    {
      id: 9,
      articleImg: BlogImg1,
      articleDate: "May 02, 2024",
      articleTitle: "Tres vubösm trens. Pode kanade för plaskap.",
      articleDesc:
        "Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet, innan enogon. ",
    },
  ];
  return (
    <>
      <BlogsHeroView>
        <div className="hero-text">
          <NavBar2 />
          <div className="info">
            <h2 className="title">Blogs & Insights</h2>

            <p>
              Discover practical tips, industry insights, and expert advice to
              optimize your student worker scheduling and empower your team.
            </p>
          </div>
        </div>
      </BlogsHeroView>

      <BlogsListView>
        <BlogsFeaturedView>
          <div className="featured-container-a">
            <Card>
              <img src={BlogImg1} />
            </Card>
            <div className="article-info">
              <div className="tags">
                <div className="tags-label">Featured article</div>
                <div className="tags-date">May 02, 2024</div>
              </div>
              <div className="article-desc">
                <h2>Tres vubösm trens. Pode kanade för plaskap. </h2>
                <p>
                  Lörem ipsum nikyst päde päkus. Neser kalsongbadare. Håtysamma
                  bolall, prengar. Sharenting ande. Tvodd gigall, dent nihet,
                  innan enogon.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="featured-container-b">
            {FeaturedOtherData.map((article, index) => (
              <div key={index} className="featured-other">
                <Card2>
                  <img src={article.articleImg} />
                </Card2>
                <div className="article-desc">
                  <p>{article.articleDate}</p>
                  <h2>{article.articleTitle}</h2>
                </div>
              </div>
            ))}
          </div>
        </BlogsFeaturedView>
        <BlogsAllView>
          <p>ALL ARTICLES</p>
          <div className="articles-grid">
            {AllArticlesData.map((article, index) => (
              <div key={index} className="cell-container">
                <img src={article.articleImg} />
                <p className="tags-date">{article.articleDate}</p>
                <h2 className="tags-title">{article.articleTitle}</h2>
                <p className="tags-desc">{article.articleDesc}</p>
              </div>
            ))}
          </div>
          {AllArticlesData.length > 6 && (
            <div className="button-more">
              <button>Load more</button>
            </div>
          )}
        </BlogsAllView>
      </BlogsListView>
      <BlogsVideoView>
        <div className="videos-container">
          <div className="videos-main">
            <div className="label">featured videos</div>
            <div className="videos-items">
              <div className="videos-item">
                <img src={BlogImg1} />
                <div className="video-tags">
                  <div className="tags-label">1 min</div>
                  <div className="tags-date">May 02, 2024</div>
                </div>
                <h2>Tres vubösm trens. Pode kanade för plaskap. </h2>
              </div>
              <div className="videos-item">
                <img src={BlogImg1} />
                <div className="video-tags">
                  <div className="tags-label">1 min</div>
                  <div className="tags-date">May 02, 2024</div>
                </div>
                <h2>Tres vubösm trens. Pode kanade för plaskap. </h2>
              </div>
            </div>
          </div>
          <div className="button-more">
            <button>Watch more on Youtube</button>
          </div>
        </div>
      </BlogsVideoView>
    </>
  );
};

const BlogsHeroView = styled.div`
  border-radius: 40px;
  padding-bottom: 10rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.purple.purple_10};
  background-image: url("/images/pricing-bg.webp");
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

const Card = styled.div`
  width: 100%;
  border-radius: 60px;
  padding: 1.2rem;
  background-color: #e5e1fc66;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
  }

  img {
    width: 100%;
    border-radius: 60px;
  }
`;

const Card2 = styled.div`
  width: 40%;
  border-radius: 20px;
  padding: 0.8rem;
  background-color: #e5e1fc66;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
  }

  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const BlogsListView = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobile} {
    margin: 0 1rem;
    margin-bottom: 3rem;
  }
`;

const BlogsFeaturedView = styled.div`
  margin: 0 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media ${device.mobile} {
    margin: 0 1rem;
    margin-bottom: 3rem;
  }

  .featured-container-a {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    width: 48%;
    color: #29234f;

    .article-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      .tags {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
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

      .article-desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        font-size: 14px;
      }
    }
  }

  .featured-container-b {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 48%;

    .featured-other {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;

      .article-desc {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;

        h2 {
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          color: ${({ theme }) => theme.colors.blue.blue_30};
        }

        p {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          color: ${({ theme }) => theme.colors.purple.purple_40};
        }
      }
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.blue.blue_30};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.purple.purple_40};
  }
`;

const BlogsAllView = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  align-items: flex-start;

  @media ${device.mobile} {
    margin: 0 1rem;
    margin-bottom: 3rem;
  }

  .button-more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      font-size: 14px;
      font-weight: 700;
      color: #7B68EE;
      background: white;
      border: 1px solid #7B68EE;
      border-radius: 6px;
      padding: 1rem 2rem;
      cursor: pointer;
    }
  }
  .articles-grid {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items-center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;

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
  }


`;
const BlogsVideoView = styled.div`
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
  .videos-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: flex-start;
    padding: 12rem 0;

    .videos-main {
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: flex-start;
      width: 100%;
      .label {
        text-transform: uppercase;
        font-size: 14px;
      }
      .videos-items {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .videos-item {
          width: 47%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 24px;
          text-align: center;

          img {
            width: 100%;
            border-radius: 40px;
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
      color: #7B68EE;
      background: white;
      border: 1px solid #7B68EE;
      border-radius: 6px;
      padding: 1rem 2rem;
      cursor: pointer;
    }
  }
`;
