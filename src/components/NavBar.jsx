import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Icons } from "../assets/icons/icons";
import { device } from "../constants/breakpoints";
import { MobileNavbar } from "./MobileNavbar";
import { FormModal } from "./FormModal";
import { CongratsModal } from "./CongratsModal";

export const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <NavBarView>
        <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
        <Link to="/">
          <Logo />
        </Link>
        <div className="routes">
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#" activeClassName="active">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/pricing" activeClassName="active">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button onClick={() => {
            setShowFormModal(true)
            // setShowSuccessModal(true);
          }}>
            <span>Join the Waitlist</span>
          </button>
        </div>
        <div className="menu">
          <button className="menu-btn" onClick={() => setOpenNav(!openNav)}>
            <ReactSVG src={Icons.menu} />
          </button>
        </div>
      </NavBarView>
      <FormModal showModal={showFormModal} setShowModal={setShowFormModal} />
      <CongratsModal showModal={showSuccessModal} setShowModal={setShowSuccessModal} />
    </>
  );
};

const NavBarView = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 0.5rem 2rem;
  border: 1px solid rgba(123, 104, 238, 0.08);
  background-color: transparent;

  @media ${device.mobile} {
    border: none;
    padding: 0.5rem 0;
  }

  .routes {
    /* width: 65%; */

    @media ${device.mobile} {
      display: none;
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-items: center;

      li {
        display: flex;
        padding: 0 2rem;
        gap: 0.2rem;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.grey.grey_20};
          transition: all 0.3s ease-in-out;

          &:hover {
            color: ${({ theme }) => theme.colors.white};
          }

          /* &.active {
            color: ${({ theme }) => theme.colors.white};
          } */
        }

        a.active {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  .btn {
    button {
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      padding: 1.2rem 2rem;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.purple.purple_10};
      background-color: ${({ theme }) => theme.colors.white};

      /* span {
        background: linear-gradient(to right, #8930fd 0%, #47cdd0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      } */
    }

    @media ${device.mobile} {
      display: none;
    }
  }

  .menu {
    display: none;

    @media ${device.mobile} {
      display: block;
    }

    .menu-btn {
      background: none;
      border: none;
      outline: none;
    }
  }
`;
