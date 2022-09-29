import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = (props) => {
  console.log("props", props);
  const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    gap: 15rem;
    /* border: 1px solid blue; */
    .header_logo {
      width: 15%;
    }
    .menuIcon {
      display: flex;
      /* border: 1px solid yellow; */
      /* justify-content: space-between; */
      gap: 10rem;
      background-color: ${props.loginTheme
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.black};
      align-items: center;
      text-align: center;
      width: 85%;
      .navbar-list {
        display: flex;
        gap: 3rem;
        /* padding-right: 10rem; */

        li {
          list-style: none;
          .navbar-link {
            &:link,
            &:visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.5rem;
              text-transform: uppercase;
              color: ${props.loginTheme
                ? ({ theme }) => theme.colors.gray
                : ({ theme }) => theme.colors.white};
              transition: color 0.3s linear;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.hover_color};
            }
          }
        }
      }
      .navbar-list2 {
        display: flex;
        gap: 2rem;
        align-items: center;

        li {
          list-style: none;
          .navbar-link2 {
            &:link,
            &:visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.5rem;
              text-transform: uppercase;
              color: ${props.loginTheme
                ? ({ theme }) => theme.colors.gray
                : ({ theme }) => theme.colors.white};
              transition: color 0.3s linear;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.hover_color};
            }
          }
        }
        .try_button {
          background-color: ${({ theme }) => theme.colors.hover_color};
          color: ${({ theme }) => theme.colors.black};
          border-radius: 0.3rem;
          padding: 1.1rem;
          font-size: 2rem;
        }
      }
    }
  `;
  return (
    <Nav>
      <div className="header_logo" onClick={() => props.setLoginTheme(false)}>
        <NavLink to="/">
          <img
            src={
              props.loginTheme ? "./images/lightlogo.svg" : "./images/logo.svg"
            }
            alt="logo"
            className="logo"
          />
        </NavLink>
      </div>
      <div className="menuIcon">
        <div>
          {" "}
          <ul className="navbar-list">
            <li>
              <NavLink className="navbar-link" to="/feature">
                Feature
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/resources">
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/customers">
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/agencies">
                Agencies
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbar-list2">
            <li>
              <NavLink className="navbar-link2" to="/contactus">
                Contact Us
              </NavLink>
            </li>
            <li onClick={() => props.setLoginTheme(true)}>
              <NavLink className="navbar-link2" to="/login">
                Login
              </NavLink>
            </li>
            <button className="try_button">
              {!props.loginTheme ? (
                <>
                  <NavLink to="/tryitfree">Try it free</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/tryitfree">Sign up</NavLink>
                </>
              )}
            </button>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
