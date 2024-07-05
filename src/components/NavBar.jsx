import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <NavBarView>
      <Link href='/'>
        <Logo />
      </Link>

      <div className="routes">
        <ul>
          <li>
            <NavLink to='/' activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to='/pricing' activeClassName="active">Pricing</NavLink>
          </li>
          <li>
            <NavLink to='/blog' activeClassName="active">Blog</NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>

    </NavBarView>
  )
}

const NavBarView = styled.div`
  width: 524px;
  display: flex;
  margin: 2rem auto;
  justify-content: space-between;
  align-items: center;
  /* gap: 2rem; */
  border-radius: 100px;
  padding: 0.5rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey.grey_20};
  background-color: ${({ theme }) => theme.colors.grey.grey_10};

  .routes {
    width: 65%;
    /* padding: 0 2rem; */

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: space-between;
  
      li {
        display: flex;
        gap: 0.2rem;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.grey.grey_30};

          &:hover {
            border-radius: 100px;
            padding: 0.45rem 1rem;
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.blue.blue_10};
          }

          .active {
            border-radius: 100px;
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.blue.blue_10};
          }
        }
      }
    }
  }

`;