import React, { useState } from "react";
import styled from "styled-components";
import { privacyPolicy } from "../../constants/data";
import { device } from "../../constants/breakpoints";
import { NavBar2 } from "../../components/NavBar2";
import DataTable from "./DataTable";

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
          <div id="share">
            <h3>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
            <div className="text">
              <p>
                In Short: We may share information in specific situations
                described in this section and/or with the following third
                parties.
              </p>
              <p>
                We may need to share your personal information in the following
                situations:
              </p>
              <ul>
                <li>
                  Business Transfers: We may share or transfer your information
                  in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </li>

                <li>
                  When we use Google Maps Platform APIs: We may share your
                  information with certain Google Maps Platform APIs (e.g.,
                  Google Maps API, Places API). We obtain and store on your
                  device ("cache") your location. You may revoke your consent
                  anytime by contacting us at the contact details provided at
                  the end of this document.
                </li>
                <li>
                  Affiliates: We may share your information with our affiliates,
                  in which case we will require those affiliates to honor this
                  privacy notice. Affiliates include our parent company and any
                  subsidiaries, joint venture partners, or other companies that
                  we control or that are under common control with us.
                </li>
                <li>
                  Business Partners: We may share your information with our
                  business partners to offer you certain products, services, or
                  promotions.
                </li>
              </ul>
            </div>
          </div>
          <div id="tracking">
            <h3>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
            <div className="text">
              <p>
                In Short: We may use cookies and other tracking technologies to
                collect and store your information.
              </p>
              <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to gather information when you interact with
                our Services. Some online tracking technologies help us maintain
                the security of our Services, prevent crashes, fix bugs, save
                your preferences, and assist with basic site functions. We also
                permit third parties and service providers to use online
                tracking technologies on our Services for analytics and
                advertising, including to help manage and display
                advertisements, to tailor advertisements to your interests, or
                to send abandoned shopping cart reminders (depending on your
                communication preferences). The third parties and service
                providers use their technology to provide advertising about
                products and services tailored to your interests which may
                appear either on our Services or on other websites. To the
                extent these online tracking technologies are deemed to be a
                "sale"/"sharing" (which includes targeted advertising, as
                defined under the applicable laws) under applicable US state
                laws, you can opt out of these online tracking technologies by
                submitting a request as described below under section "DO UNITED
                STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?" Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
              </p>
              <p>
                We may share your information with Google Analytics to track and
                analyze the use of the Services. The Google Analytics
                Advertising Features that we may use include: Google Analytics
                Demographics and Interests Reporting, Remarketing with Google
                Analytics and Google Display Network Impressions Reporting. To
                opt out of being tracked by Google Analytics across the
                Services, visit Google Analytics Opt-out. You can opt out of
                Google Analytics Advertising Features through Ads Settings and
                Ad Settings for mobile apps. Other opt out means include Network
                Advertising Initiative Opt-out and Network Advertising Opt-out
                Mobile Choice. For more information on the privacy practices of
                Google, please visit the Google Privacy & Terms page.
              </p>
            </div>
          </div>
          <div id="transferred">
            <h3>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h3>
            <div className="text">
              <p>
                In Short: We may transfer, store, and process your information
                in countries other than your own.
              </p>
              <p>
                Our servers are located in the United States. If you are
                accessing our Services from outside the United States, please be
                aware that your information may be transferred to, stored, and
                processed by us in our facilities and by those third parties
                with whom we may share your personal information (see "WHEN AND
                WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" above), in
                Nigeria, and other countries. If you are a resident in the
                European Economic Area (EEA), United Kingdom (UK), or
                Switzerland, then these countries may not necessarily have data
                protection laws or other similar laws as comprehensive as those
                in your country. However, we will take all necessary measures to
                protect your personal information in accordance with this
                privacy notice and applicable law.
              </p>
              <p>
                European Commission's Standard Contractual Clauses: We have
                implemented measures to protect your personal information,
                including by using the European Commission's Standard
                Contractual Clauses for transfers of personal information
                between our group companies and between us and our third-party
                providers. These clauses require all recipients to protect all
                personal information that they process originating from the EEA
                or UK in accordance with European data protection laws and
                regulations. Our Standard Contractual Clauses can be provided
                upon request where available. We may have implemented similar
                appropriate safeguards with our third-party service providers
                and partners and further details can be provided upon request.
              </p>
            </div>
          </div>
          <div id="keeping">
            <h3>HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
            <div className="text">
              <p>
                In Short: We keep your information for as long as necessary to
                fulfill the purposes outlined in this privacy notice unless
                otherwise required by law.
              </p>
              <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements). When we
                have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </div>
          </div>
          <div id="safety">
            <h3>HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
            <div className="text">
              <p>
                In Short: We aim to protect your personal information through a
                system of organizational and technical security measures.
              </p>
              <p>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </p>
            </div>
          </div>
          <div id="minors">
            <h3>DO WE COLLECT INFORMATION FROM MINORS?</h3>
            <div className="text">
              <p>
                In Short: We do not knowingly collect data from or market to
                children under 18 years of age.
              </p>
              <p>
                We do not knowingly collect, solicit data from, or market to
                children under 18 years of age, nor do we knowingly sell such
                personal information. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent's use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at
                contact@ezscheduler.xyz.
              </p>
            </div>
          </div>
          <div id="rights">
            <h3>WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <div className="text">
              <p>
                In Short: Depending on your state of residence in the US or in
                some regions, such as the European Economic Area (EEA), United
                Kingdom (UK), Switzerland, and Canada, you have rights that
                allow you greater access to and control over your personal
                information. You may review, change, or terminate your account
                at any time, depending on your country, province, or state of
                residence.
              </p>
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you
                have certain rights under applicable data protection laws. These
                may include the right (i) to request access and obtain a copy of
                your personal information, (ii) to request rectification or
                erasure; (iii) to restrict the processing of your personal
                information; (iv) if applicable, to data portability; and (v)
                not to be subject to automated decision-making. In certain
                circumstances, you may also have the right to object to the
                processing of your personal information. You can make such a
                request by contacting us by using the contact details provided
                in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
                below.
              </p>
              <p>
                We will consider and act upon any request in accordance with
                applicable data protection laws. If you are located in the EEA
                or UK and you believe we are unlawfully processing your personal
                information, you also have the right to complain to your Member
                State data protection authority or UK data protection authority.
                If you are located in Switzerland, you may contact the Federal
                Data Protection and Information Commissioner.
              </p>
              <p>
                <b>Withdrawing your consent:  </b>If we are relying on your
                consent to process your personal information, which may be
                express and/or implied consent depending on the applicable law,
                you have the right to withdraw your consent at any time. You can
                withdraw your consent at any time by contacting us by using the
                contact details provided in the section "HOW CAN YOU CONTACT US
                ABOUT THIS NOTICE?" below. However, please note that this will
                not affect the lawfulness of the processing before its
                withdrawal nor, when applicable law allows, will it affect the
                processing of your personal information conducted in reliance on
                lawful processing grounds other than consent.
              </p>
              <p>
                <b>Opting out of marketing and promotional communications:  </b>
                You can unsubscribe from our marketing and promotional
                communications at any time by clicking on the unsubscribe link
                in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to
                the SMS messages that we send, or by contacting us using the
                details provided in the section "HOW CAN YOU CONTACT US ABOUT
                THIS NOTICE?" below. You will then be removed from the marketing
                lists. However, we may still communicate with you — for example,
                to send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
              </p>
              <p>
                <b>Cookies and similar technologies:   </b>
                  Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove
                cookies and to reject cookies. If you choose to remove cookies
                or reject cookies, this could affect certain features or
                services of our Services. If you have questions or comments
                about your privacy rights, you may email us at
                <a href="mailto:contact@ezscheduler.xyz" className="email">
                  contact@ezscheduler.xyz
                </a>
                .
              </p>
            </div>
          </div>
          <div id="controls">
            <h3>CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
            <div className="text">
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage, no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
                California law requires us to let you know how we respond to web
                browser DNT signals. Because there currently is not an industry
                or legal standard for recognizing or honoring DNT signals, we do
                not respond to them at this time.
              </p>
            </div>
          </div>
          <div id="specific">
            <h3>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
            <div className="text">
              <p>
                In Short: If you are a resident of California, Colorado,
                Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
                Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas,
                Utah, or Virginia, you may have the right to request access to
                and receive details about the personal information we maintain
                about you and how we have processed it, correct inaccuracies,
                get a copy of, or delete your personal information. You may also
                have the right to withdraw your consent to our processing of
                your personal information. These rights may be limited in some
                circumstances by applicable law. More information is provided
                below.
              </p>
              <p>
                <b>Categories of Personal Information We Collect</b>
              </p>
              <p>
                We have collected the following categories of personal
                information in the past twelve (12) months:
              </p>
              <DataTable />
              <p>
                We may also collect other personal information outside of these
                categories through instances where you interact with us in
                person, online, or by phone or mail in the context of:
              </p>
              <ul>
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>
                  Facilitation in the delivery of our Services and to respond to
                  your inquiries.
                </li>
              </ul>
              <p>
                <b>
                  We will use and retain the collected personal information as
                  needed to provide the Services or for:
                </b>
              </p>
              <ul>
                <li>Category I - As long as the user has an account with us</li>
                <li>Category H - 1 year</li>
              </ul>
              <p>
                <b>Sources of Personal Information</b>
              </p>
              <p>
                Learn more about the sources of personal information we collect
                in "WHAT INFORMATION DO WE COLLECT?"
              </p>
              <p>
                <b>How We Use and Share Personal Information</b>
              </p>
              <p>
                Learn about how we use your personal information in the section,
                "HOW DO WE PROCESS YOUR INFORMATION?"{" "}
              </p>
              <p>
                <b>Will your information be shared with anyone else?</b>
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Learn more about how we disclose personal
                information in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR
                PERSONAL INFORMATION?" We may use your personal information for
                our own business purposes, such as for undertaking internal
                research for technological development and demonstration. This
                is not considered to be "selling" of your personal information.
                We have not disclosed, sold, or shared any personal information
                to third parties for a business or commercial purpose in the
                preceding twelve (12) months. We will not sell or share personal
                information in the future belonging to website visitors, users,
                and other consumers.
              </p>
              <p>
                <b>Your Rights</b>
              </p>
              <p>
                You have rights under certain US state data protection laws.
                However, these rights are not absolute, and in certain cases, we
                may decline your request as permitted by law. These rights
                include:
              </p>
              <ul>
                <li>
                  <b>Right to know</b> whether or not we are processing your
                  personal data
                </li>
                <li>
                  <b>Right to access</b> your personal data
                </li>
                <li>
                  <b>Right to correct</b> inaccuracies in your personal data
                </li>
                <li>
                  <b>Right to request</b> the deletion of your personal data
                </li>
                <li>
                  <b>Right to obtain a copy</b> of the personal data you
                  previously shared with us
                </li>
                <li>
                  <b>Right to non-discrimination</b> for exercising your rights
                </li>
                <li>
                  <b>Right to opt out</b> of the processing of your personal
                  data if it is used for targeted advertising (or sharing as
                  defined under California's privacy law), the sale of personal
                  data, or profiling in furtherance of decisions that produce
                  legal or similarly significant effects ("profiling")
                </li>
              </ul>
              <p>
                Depending upon the state where you live, you may also have the
                following rights:
              </p>
              <ul>
                <li>
                  Right to obtain a list of the categories of third parties to
                  which we have disclosed personal data (as permitted by
                  applicable law, including California's and Delaware's privacy
                  law)
                </li>
                <li>
                  Right to obtain a list of specific third parties to which we
                  have disclosed personal data (as permitted by applicable law,
                  including Oregon's privacy law)
                </li>
                <li>
                  Right to limit use and disclosure of sensitive personal data
                  (as permitted by applicable law, including California's
                  privacy law)
                </li>
                <li>
                  Right to opt out of the collection of sensitive data and
                  personal data collected through the operation of a voice or
                  facial recognition feature (as permitted by applicable law,
                  including Florida's privacy law)
                </li>
              </ul>
              <p>
                <b>How to Exercise Your Rights</b>
              </p>
              <p>
                To exercise these rights, you can contact us by submitting a
                data subject access request, by emailing us at
                <a href="mailto:contact@ezscheduler.xyz" className="email">
                  contact@ezscheduler.xyz
                </a>
                , by visiting{" "}
                <a href="http://www.ezscheduler.xyz">
                  http://www.ezscheduler.xyz
                </a>
                or by referring to the contact details at the bottom of this
                document. Under certain US state data protection laws, you can
                designate an authorized agent to make a request on your behalf.
                We may deny a request from an authorized agent that does not
                submit proof that they have been validly authorized to act on
                your behalf in accordance with applicable laws.
              </p>
              <p>
                <b>Request Verification</b>
              </p>
              <p>
                Upon receiving your request, we will need to verify your
                identity to determine you are the same person about whom we have
                the information in our system. We will only use personal
                information provided in your request to verify your identity or
                authority to make the request. However, if we cannot verify your
                identity from the information already maintained by us, we may
                request that you provide additional information for the purposes
                of verifying your identity and for security or fraud-prevention
                purposes. If you submit the request through an authorized agent,
                we may need to collect additional information to verify your
                identity before processing your request, and the agent will need
                to provide a written and signed permission from you to submit
                such request on your behalf.
              </p>
              <p>
                <b>Appeals</b>
              </p>
              <p>
                Under certain US state data protection laws, if we decline to
                take action regarding your request, you may appeal our decision
                by emailing us at{" "}
                <a href="mailto:contact@ezscheduler.xyz" className="email">
                  contact@ezscheduler.xyz
                </a>
                . We will inform you in writing of any action taken or not taken
                in response to the appeal, including a written explanation of
                the reasons for the decisions. If your appeal is denied, you may
                submit a complaint to your state attorney general.
              </p>
              <p>
                <b>California "Shine The Light" Law</b>
              </p>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us by using
                the contact details provided in the section "HOW CAN YOU CONTACT
                US ABOUT THIS NOTICE?"
              </p>
            </div>
          </div>
          <div id="update">
            <h3>DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <div className="text">
              <p>
                In Short: Yes, we will update this notice as necessary to stay
                compliant with relevant laws.
              </p>
              <p>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Revised" date at the
                top of this privacy notice. If we make material changes to this
                privacy notice, we may notify you either by prominently posting
                a notice of such changes or by directly sending you a
                notification. We encourage you to review this privacy notice
                frequently to be informed of how we are protecting your
                information.
              </p>
            </div>
          </div>
          <div id="contact">
            <h3>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
            <div className="text">
              <p>
                If you have questions or comments about this notice, you may
                email us at{" "}
                <a href="mailto:contact@ezscheduler.xyz" className="email">
                  contact@ezscheduler.xyz
                </a>{" "}
                or contact us by post at:
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li>EZ Scheduler (Reserve Corporation HQ)</li>{" "}
                <li>18 Spring Street Poughkeepsie,</li>
                <li>NY 12601 United States</li>
              </ul>
            </div>
          </div>
          <div id="delete">
            <h3>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h3>
            <div className="text">
              <p>
                Based on the applicable laws of your country or state of
                residence in the US, you may have the right to request access to
                the personal information we collect from you, details about how
                we have processed it, correct inaccuracies, or delete your
                personal information. You may also have the right to withdraw
                your consent to our processing of your personal information.
                These rights may be limited in some circumstances by applicable
                law. To request to review, update, or delete your personal
                information, please fill out and submit a data subject access
                request.
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
    position: relative;

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
        overflow-y: scroll;
        height: 100vh;
        position: sticky;
        top: 0;

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
