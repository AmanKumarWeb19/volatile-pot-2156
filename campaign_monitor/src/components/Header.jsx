import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = (props) => {
  console.log("propd", props.loginTheme);
  const MainHeader = styled.header`
    height: 8rem;
    background-color: ${props.loginTheme
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};

    display: flex;
    align-items: center;
    z-index: 1;
    .container {
      width: 100%;
      display: flex;

      justify-content: end;
      align-items: center;
      height: 100%;
    }
    .logo {
      height: auto;
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
