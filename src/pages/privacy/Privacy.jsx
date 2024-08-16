import React, { useState } from "react";
import styled from "styled-components";
import { privacyPolicy } from "../../constants/data";
import { device } from "../../constants/breakpoints";
import { NavBar2 } from "../../components/NavBar2";

export const Privacy = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PrivacyView>
      <NavBar2 />
      <section>
        <div className="left-section">
          <div className="preview">
            {privacyPolicy.map((privacy, index) => {
              return (
                <div key={privacy.id} className="links">
                  <a
                    href={`#${privacy.id}`}
                    onClick={() => setSelected(index)}
                    className={selected === index ? "menu-active" : "menu"}
                  >
                    <p>{privacy.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-section">
          <h1>Privacy Policy</h1>
          <div id="introduction">
            <h3>Introduction</h3>
            <div className="text">
              <p>
                This privacy notice for EZ Scheduler ("we," "us," or "our"),
                describes how and why we might collect, store, use, and/or share
                ("process") your information when you use our services
                ("Services"), such as when you:
                <ul>
                  <li>
                    Visit our website at{" "}
                    <a href="http://www.ezscheduler.xyz" className="href">
                      http://www.ezscheduler.xyz
                    </a>
                    , or any website of ours that links to this privacy notice.
                  </li>
                  <li>
                    Engage with us in other related ways, including any sales,
                    marketing, or events. Questions or concerns?
                  </li>
                </ul>
              </p>
              <p>
                Questions or concerns? Reading this privacy notice will help you
                understand your privacy rights and choices. If you do not agree
                with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us
                at{" "}
                <a href="mailto:contact@ezscheduler.xyz" className="email">
                  contact@ezscheduler.xyz
                </a>
                .
              </p>
            </div>
          </div>
          <div id="summary">
            <h3>Summary</h3>
            <div className="text">
              <p>
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our table
                of contents below to find the section you are looking for. Want
                to learn more about what we do with any information we collect?
                Review the privacy notice in full.
                <ul>
                  <li>
                    What personal information do we process? When you visit,
                    use, or navigate our Services, we may process personal
                    information depending on how you interact with us and the
                    Services, the choices you make, and the products and
                    features you use. Learn more about personal information you
                    disclose to us.
                  </li>
                  <li>
                    Do we process any sensitive personal information? We do not
                    process sensitive personal information.
                  </li>
                  <li>
                    Do we collect any information from third parties? We do not
                    collect any information from third parties.
                  </li>
                  <li>
                    How do we process your information? We process your
                    information to provide, improve, and administer our
                    Services, communicate with you, for security and fraud
                    prevention, and to comply with law. We may also process your
                    information for other purposes with your consent. We process
                    your information only when we have a valid legal reason to
                    do so. Learn more about how we process your information.
                  </li>
                  <li>
                    In what situations and with which parties do we share
                    personal information? We may share information in specific
                    situations and with specific third parties. Learn more about
                    when and with whom we share your personal information.
                  </li>
                  <li>
                    How do we keep your information safe? We have organizational
                    and technical processes and procedures in place to protect
                    your personal information. However, no electronic
                    transmission over the internet or information storage
                    technology can be guaranteed to be 100% secure, so we cannot
                    promise or guarantee that hackers, cybercriminals, or other
                    unauthorized third parties will not be able to defeat our
                    security and improperly collect, access, steal, or modify
                    your information. Learn more about how we keep your
                    information safe.
                  </li>
                  <li>
                    What are your rights? Depending on where you are located
                    geographically, the applicable privacy law may mean you have
                    certain rights regarding your personal information. Learn
                    more about your privacy rights.
                  </li>
                  <li>
                    How do you exercise your rights? The easiest way to exercise
                    your rights is by submitting a data subject access request
                    or by contacting us. We will consider and act upon any
                    request in accordance with applicable data protection laws.
                  </li>
                </ul>
              </p>
              <p>
                Want to learn more about what we do with any information we
                collect? Review the privacy notice in full.
              </p>
            </div>
          </div>
          <div id="collection">
            <h3>WHAT INFORMATION DO WE COLLECT?</h3>
            <div className="text">
              <p>
                Personal information you disclose to us <br />
                In Short: We collect personal information that you provide to
                us. <br />
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Services, or otherwise when you contact us.
              </p>
              <p>
                Personal Information Provided by You: The personal information
                that we collect depends on the context of your interactions with
                us and the Services, the choices you make, and the products and
                features you use. The personal information we collect may
                include the following:
                <ul>
                  <li>Names</li>
                  <li>Phone numbers</li>
                  <li>Email addresses</li>
                  <li>Job titles</li>
                  <li>State/location</li>
                  <li>Industry</li>
                </ul>
              </p>
              <p>
                Sensitive Information: We do not process sensitive information.
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
              <p>Information automatically collected</p>
              <p>
                In Short: Some information — such as your Internet Protocol (IP)
                address and/or browser and device characteristics — is collected
                automatically when you visit our Services. We automatically
                collect certain information when you visit, use, or navigate the
                Services. This information does not reveal your specific
                identity (like your name or contact information) but may include
                device and usage information, such as your IP address, browser
                and device characteristics, operating system, language
                preferences, referring URLs, device name, country, location,
                information about how and when you use our Services, and other
                technical information. This information is primarily needed to
                maintain the security and operation of our Services, and for our
                internal analytics and reporting purposes. Like many businesses,
                we also collect information through cookies and similar
                technologies. The information we collect includes:
              </p>
              <p>
                Log and Usage Data: Log and usage data is service-related,
                diagnostic, usage, and performance information our servers
                automatically collect when you access or use our Services and
                which we record in log files. Depending on how you interact with
                us, this log data may include your IP address, device
                information, browser type, and settings and information about
                your activity in the Services (such as the date/time stamps
                associated with your usage, pages and files viewed, searches,
                and other actions you take such as which features you use),
                device event information (such as system activity, error reports
                (sometimes called "crash dumps"), and hardware settings).
              </p>
              <p>
                Location Data: We collect location data such as information
                about your device's location, which can be either precise or
                imprecise. How much information we collect depends on the type
                and settings of the device you use to access the Services. For
                example, we may use GPS and other technologies to collect
                geolocation data that tells us your current location (based on
                your IP address). You can opt out of allowing us to collect this
                information either by refusing access to the information or by
                disabling your Location setting on your device. However, if you
                choose to opt out, you may not be able to use certain aspects of
                the Services.
              </p>
            </div>
          </div>
          <div id="process">
            <h3>HOW DO WE PROCESS YOUR INFORMATION?</h3>
            <div className="text">
              <p>
                In Short: We process your information to provide, improve, and
                administer our Services, communicate with you, for security and
                fraud prevention, and to comply with law. We may also process
                your information for other purposes with your consent.
              </p>
              <p>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including
                <ul>
                  <li>
                    To deliver and facilitate delivery of services to the user:
                    We may process your information to provide you with the
                    requested service.
                  </li>
                  <li>
                    To respond to user inquiries/offer support to users: We may
                    process your information to respond to your inquiries and
                    solve any potential issues you might have with the requested
                    service.
                  </li>
                  <li>
                    To send administrative information to you: We may process
                    your information to send you details about our products and
                    services, changes to our terms and policies, and other
                    similar information.
                  </li>
                  <li>
                    To fulfill and manage your orders: We may process your
                    information to fulfill and manage your orders, payments,
                    returns, and exchanges made through the Services.
                  </li>
                  <li>
                    To enable user-to-user communications: We may process your
                    information if you choose to use any of our offerings that
                    allow for communication with another user.
                  </li>
                  <li>
                    To request feedback: We may process your information when
                    necessary to request feedback and to contact you about your
                    use of our Services.
                  </li>
                  <li>
                    To send you marketing and promotional communications: We may
                    process the personal information you send to us for our
                    marketing purposes, if this is in accordance with your
                    marketing preferences. You can opt out of our marketing
                    emails at any time. For more information, see "WHAT ARE YOUR
                    PRIVACY RIGHTS?" below.
                  </li>
                  <li>
                    To deliver targeted advertising to you: We may process your
                    information to develop and display personalized content and
                    advertising tailored to your interests, location, and more.
                  </li>
                  <li>
                    To protect our Services: We may process your information as
                    part of our efforts to keep our Services safe and secure,
                    including fraud monitoring and prevention.
                  </li>
                  <li>
                    To identify usage trends: We may process information about
                    how you use our Services to better understand how they are
                    being used so we can improve them.
                  </li>
                  <li>
                    To determine the effectiveness of our marketing and
                    promotional campaigns: We may process your information to
                    better understand how to provide marketing and promotional
                    campaigns that are most relevant to you.
                  </li>
                  <li>
                    To save or protect an individual's vital interest: We may
                    process your information when necessary to save or protect
                    an individual’s vital interest, such as to prevent harm.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div id="legal">
            <h3>
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </h3>
            <div className="text">
              <p>
                In Short: We only process your personal information when we
                believe it is necessary and we have a valid legal reason (i.e.,
                legal basis) to do so under applicable law, like with your
                consent, to comply with laws, to provide you with services to
                enter into or fulfill our contractual obligations, to protect
                your rights, or to fulfill our legitimate business interests.
              </p>
              <p>
                If you are located in the EU or UK, this section applies to you
              </p>
              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on in order
                to process your personal information. As such, we may rely on
                the following legal bases to process your personal information:
                <ul>
                  <li>
                    Consent: We may process your information if you have given
                    us permission (i.e., consent) to use your personal
                    information for a specific purpose. You can withdraw your
                    consent at any time. Learn more about withdrawing your
                    consent
                  </li>
                  <li>
                    Performance of a Contract: We may process your personal
                    information when we believe it is necessary to fulfill our
                    contractual obligations to you, including providing our
                    Services or at your request prior to entering into a
                    contract with you.
                  </li>
                  <li>
                    Legitimate Interests: We may process your information when
                    we believe it is reasonably necessary to achieve our
                    legitimate business interests and those interests do not
                    outweigh your interests and fundamental rights and freedoms.
                    For example, we may process your personal information for
                    some of the purposes described in order to:
                  </li>
                  <li className="left">
                    Send users information about special offers and discounts on
                    our products and services.
                  </li>
                  <li className="left">
                    Develop and display personalized and relevant advertising
                    content for our users.
                  </li>
                  <li className="left">
                    Analyze how our Services are used so we can improve them to
                    engage and retain users.
                  </li>
                  <li className="left">Support our marketing activities.</li>
                  <li className="left">
                    Diagnose problems and/or prevent fraudulent activities.
                  </li>
                  <li className="left">
                    Understand how our users use our products and services so we
                    can improve user experience.
                  </li>
                  <li>
                    Legal Obligations: We may process your information where we
                    believe it is necessary for compliance with our legal
                    obligations, such as to cooperate with a law enforcement
                    body or regulatory agency, exercise or defend our legal
                    rights, or disclose your information as evidence in
                    litigation in which we are involved.
                  </li>
                  <li>
                    Vital Interests: We may process your information where we
                    believe it is necessary to protect your vital interests or
                    the vital interests of a third party, such as situations
                    involving potential threats to the safety of any person.
                  </li>
                </ul>
              </p>
              <p>
                If you are located in Canada, this section applies to you. We
                may process your information if you have given us specific
                permission (i.e., express consent) to use your personal
                information for a specific purpose, or in situations where your
                permission can be inferred (i.e., implied consent). You can
                withdraw your consent at any time. In some exceptional cases, we
                may be legally permitted under applicable law to process your
                information without your consent, including, for example:
                <ul>
                  <li>
                    If collection is clearly in the interests of an individual
                    and consent cannot be obtained in a timely way.
                  </li>
                  <li>
                    For investigations and fraud detection and prevention.
                  </li>
                  <li>
                    For business transactions provided certain conditions are
                    met.
                  </li>
                  <li>
                    If it is contained in a witness statement and the collection
                    is necessary to assess, process, or settle an insurance
                    claim.
                  </li>
                  <li>
                    For identifying injured, ill, or deceased persons and
                    communicating with next of kin.
                  </li>
                  <li>
                    If we have reasonable grounds to believe an individual has
                    been, is, or may be a victim of financial abuse.
                  </li>
                  <li>
                    If it is reasonable to expect collection and use with
                    consent would compromise the availability or the accuracy of
                    the information and the collection is reasonable for
                    purposes related to investigating a breach of an agreement
                    or a contravention of the laws of Canada or a province.
                  </li>
                  <li>
                    If disclosure is required to comply with a subpoena,
                    warrant, court order, or rules of the court relating to the
                    production of records.
                  </li>
                  <li>
                    If it was produced by an individual in the course of their
                    employment, business, or profession and the collection is
                    consistent with the purposes for which the information was
                    produced.
                  </li>
                  <li>
                    If the collection is solely for journalistic, artistic, or
                    literary purposes.
                  </li>
                  <li>
                    If the information is publicly available and is specified by
                    the regulations.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PrivacyView>
  );
};

const PrivacyView = styled.div`
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

        .left {
          margin-left: 2rem;
        }
      }
    }
  }
`;
