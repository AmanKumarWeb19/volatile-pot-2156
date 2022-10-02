import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero_heading">
            Drive results with unforgettable email marketing.
          </h1>
          <p className="hero_para">
            Connecting with your audience has never been easier with Campaign
            Monitor’s straightforward email marketing and automation tools.
          </p>
          <div className="button_two">
            <div className="but_one">
              <Button>
                <NavLink to="/tryitfree">Sign up for free</NavLink>
              </Button>
            </div>
            <div className="but_two">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>

        {/* imageeee............. */}
        <div className="section-hero-image">
          <picture>
            <img
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/2021_cm_web_homepage_hero-stackofemails.png?ver=298"
              alt="hero_img"
            />
          </picture>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="gist">
        <div className="box">
          <h3 className="h3_para">
            Powering email marketing for businesses around the world.
          </h3>
          <div className="img_5">
            <div className="img_pic">
              <img
                className="five_pic"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/ripcurl-2.png?ver=2981664557329231"
                alt="RIP_CURl"
              />
            </div>
            <div className="img_pic">
              <img
                className="five_pic"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/digiday-2.png?ver=2981664557329232"
                alt="digiday"
              />
            </div>
            <div className="img_pic">
              <img
                className="five_pic"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/au_red_cross-2.png?ver=2981664557329233"
                alt="red_cross"
              />
            </div>
            <div className="img_pic">
              <img
                className="five_pic"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/thegist.png?ver=2981664557329234"
                alt="gist"
              />
            </div>
            <div className="img_pic">
              <img
                className="five_pic"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/eno-2.png?ver=2981664557329235"
                alt="EN"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="sec_two">
        <h2 className="drop_email">
          Drag and drop your way to a beautiful email.
        </h2>
        <div className="boxy">
          <div className="sec_two_letter">
            <ul>
              <li>
                <h3>EASE OF USE</h3>
                Customize any template or design to showcase your brand using
                the simply powerful
                <a href="https://www.campaignmonitor.com/features/email-template-builder/">
                  drag and drop email builder
                </a>
                no coding required.
              </li>
              <br />
              <li>
                <h3>COMPLETE CUSTOMIZATION</h3>
                Display your brand at its best with precise adjustments to every
                aspect of your campaign in the email builder.
              </li>
              <br />
              <li>
                <h3>MOBILE OPTIMIZATION</h3>
                Every template is responsive to mobile devices so you can send
                knowing your campaigns look great everywhere.
              </li>
              <br />
              <li>
                <h3>TEMPLATE MANAGEMENT FOR TEAMS</h3>
                Allow your email designer to lock sections of the template so
                that your team only updates what you want them to — ensuring
                your brand style and business critical information all stay
                intact.
              </li>
              <br />
            </ul>
          </div>
          {/* /////// */}
          <div className="sec_two_img">
            <div className="gusto">
              <div className="gusto_one">
                <img
                  src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/editor_sidebar_r.png?ver=298"
                  alt="img"
                />
              </div>
              <div className="gusto_two">
                <img
                  src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/editor_email_r.png?ver=298"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* padding: rem 0; */
  /* .container {
    width: 100%;
  } */
  h1 {
    font-weight: 950;
    font-size: 100px;
  }
  .section-hero-data {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 18rem;
  }
  .button_two {
    display: flex;
    gap: 1.2rem;
  }

  .hero_heading {
    /* border: 1px solid red; */
    width: 100%;
    text-transform: uppercase;
    font-size: 4.4rem;
  }
  .hero_para {
    /* border: 1px solid red; */
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .section-hero-image img {
    width: 100%;
  }

  .picture {
    text-align: center;
  }
  .hero-img {
    max-width: 50%;
  }
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////// */

  .box {
    /* border: 1px solid red; */
    /* padding: 0px 0px 0px 20px; */
  }

  .gist {
    width: 100%;
    /* border: 1px solid red; */
    background-color: rgb(246, 246, 247);
    padding: 4.5rem;
  }
  .h3_para {
    width: 50%;
    /* border: 1px solid green; */
    margin: auto;
    text-align: center;
    font-size: 22px;
    margin-top: 5rem;
  }
  .img_5 {
    width: 70%;
    /* border: 1px solid orange; */
    display: flex;
    margin: auto;
    gap: 15rem;
    margin-top: 3rem;
  }
  .img_pic {
    /* border: 1px solid red; */
    width: 100%;
  }
  .five_pic {
    width: 100%;
  }
  /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  .sec_two {
    width: 90%;
    /* border: 2px solid green; */
    margin: auto;
    margin-top: 8rem;
  }
  .drop_email {
    font-weight: 500;
  }

  .boxy {
    width: 100%;
    /* border: 1px solid black; */
    margin-top: 5rem;
    display: flex;
    gap: 10rem;
  }
  .sec_two_letter {
    width: 40%;
    /* border: 1px solid blue; */
    line-height: 2;
    margin-top: 5rem;
    font-size: 13px;
  }
  .sec_two_img {
    width: 60%;
    height: 500px;
    /* border: 2px solid yellow; */
    margin-top: 5rem;
    /* box-shadow: ${({ theme }) => theme.colors.box_shadow}; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* display: flex; */
  }
  .gusto {
    width: 100%;

    height: 100%;
    display: flex;
    /* border: 1px solid red; */
  }
  .gusto_one {
    width: 30%;
    height: 100%;
    /* border: 1px solid red; */
  }
  .gusto_one img {
    width: 100%;
    height: 100%;
  }
  .gusto_two {
    width: 70%;
  }
  .gusto_two img {
    width: 100%;
  }
`;

export default HeroSection;
