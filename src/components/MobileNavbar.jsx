import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../constants/breakpoints";
import { ReactSVG } from "react-svg";
import { Icons } from "../assets/icons/icons";
import { Logo2 } from "./Logo2";
import { Link } from "react-router-dom";
import { FormModal } from "./FormModal";

export const MobileNavbar = ({ openNav, setOpenNav }) => {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {openNav && (
          <MobileNav
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ y: -500 }}
            transition={{ duration: 0.2 }}
          >
            <HeaderView>
              <Logo2 />
              <button className="close" onClick={() => setOpenNav(!openNav)}>
                <ReactSVG src={Icons.close} />
              </button>
            </HeaderView>
            <NavLinks>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Insights</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
              <div className="join-btn">
                <button 
                  onClick={() => {
                    setOpenNav(false);
                    setShowFormModal(true);
                  }}
                >
                  <span>Join the Waitlist</span>
                </button>
              </div>
            </NavLinks>
          </MobileNav>
        )}
      </AnimatePresence>
      <FormModal 
        showModal={showFormModal} 
        setShowModal={setShowFormModal} 
      />
    </>
  );
};

const MobileNav = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  z-index: 2000;
  position: fixed;
  top: 0px;
  left: 0;
  display: none;
  padding: 0 16px;
  overflow-y: scroll;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${device.largeTablet} {
    display: block;
  }
`;

const HeaderView = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .close {
    background: none;
    border: none;
  }
`;

const NavLinks = styled.div`
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 1rem;
    padding: 0;

    li {
      margin: 0 auto;
      font-size: 20px;
      padding: 1rem 0;
      font-weight: 400;
      list-style: none;
      line-height: 24px;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.blue.blue_30};
      }
    }
  }

  .join-btn {
    display: flex;
    margin: 1rem 0;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      background: none;
      border-radius: 6px;
      padding: 1.2rem 3rem;
      border: 1px solid ${({ theme }) => theme.colors.purple.purple_10};

      span {
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        color: ${({ theme }) => theme.colors.purple.purple_10};
      }
    }
  }
`;
