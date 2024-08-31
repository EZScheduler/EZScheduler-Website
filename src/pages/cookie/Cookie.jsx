import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../constants/breakpoints";
import { NavBar2 } from "../../components/NavBar2";
import { cookiePolicy } from "../../constants/data";

export const Cookie = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PolicyView>
      <NavBar2 />
      <section>
        <div className="left-section">
          <div className="preview">
            {cookiePolicy.map((cookie, index) => {
              return (
                <div key={cookie.id} className="links">
                  <a
                    href={`#${cookie.id}`}
                    onClick={() => setSelected(index)}
                    className={selected === index ? "menu-active" : "menu"}
                  >
                    <p>{cookie.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-section">
          <h1>Cookie Policy</h1>
          <div id="introduction">
            <h3>Introduction</h3>
            <div className="text">
              <p>
                This Cookie Policy explains how EZ Scheduler ("Company," "we,"
                "us," and "our") uses cookies and similar technologies to
                recognize you when you visit our website at{" "}
                <a href="http://www.ezscheduler.xyz" className="email">
                  http://www.ezscheduler.xyz
                </a>{" "}
                ("Website"). It explains what these technologies are and why we
                use them, as well as your rights to control our use of them. In
                some cases, we may use cookies to collect personal information,
                or that becomes personal information if we combine it with other
                information.
              </p>
            </div>
          </div>
          <div id="definition">
            <h3>WHAT ARE COOKIES?</h3>
            <div className="text">
              <p>
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. Cookies are widely used
                by website owners in order to make their websites work, or to
                work more efficiently, as well as to provide reporting
                information. Cookies set by the website owner (in this case, EZ
                Scheduler) are called "first-party cookies." Cookies set by
                parties other than the website owner are called "third-party
                cookies." Third-party cookies enable third-party features or
                functionality to be provided on or through the website (e.g.,
                advertising, interactive content, and analytics). The parties
                that set these third-party cookies can recognize your computer
                both when it visits the website in question and also when it
                visits certain other websites.
              </p>
            </div>
          </div>
          <div id="usage">
            <h3>WHY DO WE USE COOKIES?</h3>
            <div className="text">
              <p>
                We use first- and third-party cookies for several reasons. Some
                cookies are required for technical reasons in order for our
                Website to operate, and we refer to these as "essential" or
                "strictly necessary" cookies. Other cookies also enable us to
                track and target the interests of our users to enhance the
                experience on our Online Properties. Third parties serve cookies
                through our Website for advertising, analytics, and other
                purposes. This is described in more detail below.
              </p>
            </div>
          </div>
          <div id="control">
            <h3>HOW CAN I CONTROL COOKIES?</h3>
            <div className="text">
              <p>
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in the Cookie Consent Manager. The Cookie Consent
                Manager allows you to select which categories of cookies you
                accept or reject. Essential cookies cannot be rejected as they
                are strictly necessary to provide you with services.
              </p>
              <p>
                The Cookie Consent Manager can be found in the notification
                banner and on our website. If you choose to reject cookies, you
                may still use our website, though your access to some
                functionality and areas of our website may be restricted. You
                may also set or amend your web browser controls to accept or
                refuse cookies.
              </p>
              <p style={{fontWeight: 600}}>
                The specific types of first- and third-party cookies served
                through our Website and the purposes they perform are described
                in the table below (please note that the specific cookies served
                may vary depending on the specific Online Properties you visit):
              </p>
            </div>
          </div>
          <div id="browser">
            <h3>HOW CAN I CONTROL COOKIES ON MY BROWSER?</h3>
            <div className="text">
              <p>
                As the means by which you can refuse cookies through your web
                browser controls vary from browser to browser, you should visit
                your browser's help menu for more information. The following is
                information about how to manage cookies on the most popular
                browsers:
                <ul>
                  <li>Chrome</li>
                  <li>Internet Explorer</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                  <li>Edge</li>
                  <li>Opera</li>
                </ul>
              </p>
              <p>
                In addition, most advertising networks offer you a way to opt
                out of targeted advertising. If you would like to find out more
                information, please visit:
                <ul>
                  <li>Digital Advertising Alliance</li>
                  <li>Digital Advertising Alliance of Canada</li>
                  <li>European Interactive Digital Advertising Alliance</li>
                </ul>
              </p>
            </div>
          </div>
          <div id="tracking">
            <h3>WHAT ABOUT OTHER TRACKING TECHNOLOGIES, LIKE WEB BEACONS?</h3>
            <div className="text">
              <p>
                Cookies are not the only way to recognize or track visitors to a
                website. We may use other, similar technologies from time to
                time, like web beacons (sometimes called "tracking pixels" or
                "clear gifs"). These are tiny graphics files that contain a
                unique identifier that enables us to recognize when someone has
                visited our Website or opened an email including them. This
                allows us, for example, to monitor the traffic patterns of users
                from one page within a website to another, to deliver or
                communicate with cookies, to understand whether you have come to
                the website from an online advertisement displayed on a
                third-party website, to improve site performance, and to measure
                the success of email marketing campaigns. In many instances,
                these technologies are reliant on cookies to function properly,
                and so declining cookies will impair their functioning.
              </p>
            </div>
          </div>
          <div id="flash">
            <h3>DO YOU FLASH COOKIES OR LOCAL SHARED OBJECTS?</h3>
            <div className="text">
              <p>
                Websites may also use so-called "Flash Cookies" (also known as
                Local Shared Objects or "LSOs") to, among other things, collect
                and store information about your use of our services, fraud
                prevention, and for other site operations.
              </p>
              <p>
                If you do not want Flash Cookies stored on your computer, you
                can adjust the settings of your Flash player to block Flash
                Cookies storage using the tools contained in the Website Storage
                Settings Panel. You can also control Flash Cookies by going to
                the Global Storage Settings Panel and following the instructions
                (which may include instructions that explain, for example, how
                to delete existing Flash Cookies (referred to "information" on
                the Macromedia site), how to prevent Flash LSOs from being
                placed on your computer without your being asked, and (for Flash
                Player 8 and later) how to block Flash Cookies that are not
                being delivered by the operator of the page you are on at the
                time).
              </p>
              <p>
                Please note that setting the Flash Player to restrict or limit
                acceptance of Flash Cookies may reduce or impede the
                functionality of some Flash applications, including,
                potentially, Flash applications used in connection with our
                services or online content.
              </p>
            </div>
          </div>
          <div id="advertising">
            <h3>DO YOU SERVE TARGETED ADVERTISING?</h3>
            <div className="text">
              <p>
                Third parties may serve cookies on your computer or mobile
                device to serve advertising through our Website. These companies
                may use information about your visits to this and other websites
                in order to provide relevant advertisements about goods and
                services that you may be interested in. They may also employ
                technology that is used to measure the effectiveness of
                advertisements. They can accomplish this by using cookies or web
                beacons to collect information about your visits to this and
                other sites in order to provide relevant advertisements about
                goods and services of potential interest to you. The information
                collected through this process does not enable us or them to
                identify your name, contact details, or other details that
                directly identify you unless you choose to provide these.
              </p>
            </div>
          </div>
          <div id="update">
            <h3>HOW OFTEN WILL YOU UPDATE THIS COOKIE POLICY?</h3>
            <div className="text">
              <p>
                We may update this Cookie Policy from time to time in order to
                reflect, for example, changes to the cookies we use or for other
                operational, legal, or regulatory reasons. Please therefore
                revisit this Cookie Policy regularly to stay informed about our
                use of cookies and related technologies. The date at the top of
                this Cookie Policy indicates when it was last updated.
              </p>
            </div>
          </div>
          <div id="information">
            <h3>WHERE CAN I GET FURTHER INFORMATION?</h3>
            <div className="text">
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
                <ul>
                  <li className='remove'>EZ Scheduler (Reserve Corporation HQ)</li>
                  <li className='remove'>55 South Clover Street</li>
                  <li className='remove'>Poughkeepsie, NY 12601</li>
                  <li className='remove'>United States</li>
                  <li className='remove'>Phone: (845) 214-2717</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PolicyView>
  );
};

const PolicyView = styled.div`
  padding: 1rem 3rem 4rem 3rem;
  margin-bottom: 2rem;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.purple.purple_50};

  @media ${device.mobile} {
    border-radius: 20px;
    padding: 0.1rem 1rem 1rem 1rem;
  }

  section {
    gap: 4rem;
    display: flex;
    margin-top: 4rem;
    padding: 0 1rem;

    @media ${device.mobile} {
      margin-top: 1rem;
      padding: 0;
    }

    .left-section {
      width: 45%;

      @media ${device.mobile} {
        display: none;
      }

      .preview {
        margin: 0.5rem 0;

        .links {
          margin: 1rem 0;
          /* border-bottom: 1px solid black; */
          color: ${({ theme }) => theme.colors.blue.blue_30};

          .menu-active {
            /* text-decoration: none; */
            font-size: 14px;
            color: ${({ theme }) => theme.colors.purple.purple_10};
          }

          .menu {
            /* text-decoration: none; */
            font-size: 14px;
            color: ${({ theme }) => theme.colors.blue.blue_30};
          }

          a {
            /* text-decoration: none; */

            p {
            }
          }
        }
      }
    }

    .right-section {
      width: 70%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media ${device.mobile} {
        width: 100%;
      }

      h1 {
        font-size: 75px;
        font-weight: 700px;
        line-height: 84px;
        color: ${({ theme }) => theme.colors.purple.purple_40};

        @media ${device.mobile} {
          width: 100%;
          font-size: 35px;
          line-height: 39px;
          padding: 0 1rem;
        }
      }

      h3 {
        padding-bottom: 1rem;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.purple.purple_40};

        @media ${device.mobile} {
          width: 100%;
          padding-left: 1rem;
        }
      }

      h5 {
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.colors.purple.purple_40};
      }

      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.colors.purple.purple_40};
        margin-bottom: 8px;
      }

      .subtext {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media ${device.mobile} {
          width: 100%;
          padding: 0 1rem;
        }
      }

      .text {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        @media ${device.mobile} {
          width: 100%;
          padding: 0 1rem;
        }

        a {
          font-size: 1rem;
          text-decoration: none;
          color: ${({ theme }) => theme.colors.purple.purple_40};
        }

        .email {
          color: ${({ theme }) => theme.colors.purple.purple_10};
        }
      }

      ul {
        margin-top: 8px;
        /* margin-bottom: 8px; */
        margin-left: 0;

        @media ${device.mobile} {
          margin-left: 0;
        }

        li {
          font-weight: 400;
          font-size: 1rem;
          line-height: 26px;
          margin-left: 1rem;
          letter-spacing: -0.02em;
          color: ${({ theme }) => theme.colors.purple.purple_40};

          .href {
            color: ${({ theme }) => theme.colors.purple.purple_10};
          }
        }

        .remove {
          margin-left: 0;
          list-style: none;
        }

        .left {
          margin-left: 2rem;
        }
      }
    }
  }
`;
