import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = (props) => {
  console.log("propd", props.loginTheme);
  const MainHeader = styled.header`
    /* padding: 0 4.8rem; */
    height: 8rem;
    background-color: ${props.loginTheme
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    .container {
      width: 100%;
      display: flex;
      /* border: 1px solid orange; */
      justify-content: end;
      align-items: center;
    }
    .logo {
      height: auto;
      /* max-width: 30%; */
    }
  `;
  return (
    <MainHeader>
      <div className="container">
        <Navbar
          loginTheme={props.loginTheme}
          setLoginTheme={props.setLoginTheme}
        />
      </div>
    </MainHeader>
  );
};

export default Header;
