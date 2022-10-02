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
      {/* ////////////////////////////////////// */}
      <div className="Eager">
        <p className="eag_para">Eager to see it in action? Take a look.</p>
        <Button>
          <NavLink to="/tryitfree">Get started for free</NavLink>
        </Button>
      </div>
      {/* /////////////////////////////////// */}
      <div className="sec_three">
        <div className="bg_part">
          <div className="bg">
            <div className="bg_img_box">
              <img
                className="bg_img"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/sms-image-2x.png?ver=298"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg_right">
          <div className="p_tag">
            <p className="p">SMS is here!</p>
            <p className="p">A new way to connect.</p>
            <p className="p">A new way to convert.</p>
          </div>

          <div className="p2_tag">
            <p className="p2">
              Combining SMS and email marketing is the perfect way to build a
              stronger connection with your audience and maximize ROI. We make
              it easy to get started.
            </p>
          </div>

          <button>Learn More</button>
        </div>
      </div>
      {/* ////////////////////////////////Section--4---/////////////////////////////////////////// */}

      <div className="sec4">
        <div className="sec4_img_box">
          <div className="sec4_img_box">
            <img
              className="sec4_img"
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/template-1_comp-r.jpg?ver=298"
              alt=""
            />
          </div>
          <div className="sec4_img_box">
            <img
              className="sec4_img"
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/template-2_comp-r.jpg?ver=298"
              alt=""
            />
          </div>
          <div className="sec4_img_box">
            <img
              className="sec4_img"
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/template-3_comp-r.jpg?ver=298"
              alt=""
            />
          </div>
        </div>
        <div className="sec4_para">
          <p className="p1">Get started with one of our free templates.</p>
          <p className="p2">
            Start your email with one of our professionally-designed templates
            to launch targeted campaigns like marketing offers, product
            announcements, newsletters, or event promotions.
          </p>
          <button>Build an email</button>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      <div className="sec5">
        <div className="sec5_bg"></div>
      </div>
      {/* ////////////////////////// */}
      <div className="main_box">
        <div className="m_box1">
          <p className="mb_para">
            Automate email journeys for perfectly timed sends.
          </p>
          <p className="m_para">
            Most marketers think automation is intimidating. But creating
            customer journeys has never been more approachable than with the
            visual journey designer.
          </p>
          <button>Explore automation</button>
        </div>
        <div className="m_box2">
          <img
            className="m_box2_img"
            src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/agencies/family-of-brands.png?ver=298"
            alt=""
          />
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////// */}
      <div className="sec6">
        <div className="sec6_bg"></div>
      </div>
      {/* //////////////////////////////////////////////////////// */}

      <div className="sec7">
        <div className="sec7_para">
          <div className="sec7_p1">
            <p className="sec_para1">Get started with Campaign Monitor today</p>
          </div>
          <div className="sec7_p2">
            <p className="sec_para2">
              With our powerful yet easy-to-use tools, it's never been easier to
              make an impact with email marketing.
            </p>
          </div>
          <Button>
            <NavLink to="/tryitfree">Sign up for free</NavLink>
          </Button>
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
  /* //////////////////////////////////////////////////////////////////////////////////////////////////////// */
  .Eager {
    /* border: 1px solid red; */
    width: 25%;
    margin: 80px auto;

    /* margin: auto; */
  }
  .eag_para {
    /* border: 1px solid red; */
    font-size: 2rem;
  }
  .Eager Button {
    /* font-size: 13px; */
    width: 65%;
    /* border: 1px solid red; */
    margin: 10px 60px auto;
    padding: 2.5rem;
    border-radius: 0.5rem;
  }

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////// */
  .sec_three {
    width: 100%;
    height: 750px;
    /* border: 1px solid red; */
    display: flex;

    .bg_part {
      width: 50%;
      height: 800px;
      /* border: 1px solid yellow; */
      .bg {
        width: 100%;
        /* border: 1px solid red; */
        height: 100%;
        background-image: url("https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/sms-vector-bg-no-dots.svg?ver=298");
        position: relative;
        background-repeat: no-repeat;
        .bg_img_box {
          width: 80%;
          height: 100%;
          position: absolute;
          right: 0;
          display: flex;
          .bg_img {
            width: 100%;
            height: 650px;
          }
        }
      }
    }
    .bg_right {
      width: 50%;
      height: 500px;
      /* border: 2px solid green; */
      margin: 15rem 5rem auto;

      .p_tag {
        /* border: 1px solid green; */
        text-align: left;
        width: 70%;

        .p {
          font-weight: bold;
          font-size: 40px;
          line-height: 1.5;
        }
      }
      .p2_tag {
        text-align: left;
        width: 56%;
        /* border: 1px solid black; */
        font-size: 20px;
        margin-top: 2rem;
        line-height: 1.2;

        .p2 {
          /* font-size: 16px; */
        }
      }
      button {
        background-color: ${({ theme }) => theme.colors.btn_color};
        color: white;
        margin-top: 20px;
        padding: 2rem 4rem 2rem 4rem;
        font-size: 2rem;
        border-radius: 0.5rem;
        border: none;
      }
    }
  }
  /* /////////////////////////Section-4//////////////////////////// */
  .sec4 {
    width: 100%;
    height: 500px;
    /* border: 2px solid red; */
    display: flex;

    .sec4_img_box {
      width: 60%;
      height: 450px;
      /* border: 2px solid black; */
      display: flex;
      .sec4_img_box {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        gap: 2rem;
        border-radius: 1rem;
        border: none;
      }
      .sec4_img {
        width: 98%;
        /* border: 1px solid red; */
      }
    }
    .sec4_para {
      width: 35%;
      height: 350px;
      /* border: 1px solid red; */
      margin: 50px auto;

      .p1 {
        font-size: 40px;
        font-weight: bold;
      }
      .p2 {
        font-size: 20px;
      }
      button {
        font-size: 18px;
        margin-top: 20px;
        padding: 2rem 4rem;
        color: rgb(120, 86, 255);
        border: 1px solid rgb(120, 86, 255);
      }
    }
  }
  .sec5 {
    /* border: 1px solid red; */
    width: 100%;
    height: 450px;

    .sec5_bg {
      /* position: relative; */
      width: 100%;
      height: 400px;
      background-image: url("https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/heroes/banner-ripcurl.jpg");
    }
  }
  /* ///////////////////////////////////////////////////////// */
  .main_box {
    width: 80%;
    height: 600px;
    /* border: 1px solid red; */
    margin: 50px auto;
    display: flex;
    gap: 5rem;

    .m_box1 {
      width: 50%;
      /* border: 1px solid red; */
      margin: 50px 0px;

      .mb_para {
        /* border: 1px solid red; */
        width: 80%;
        font-size: 40px;
        font-weight: bold;
        /* margin: 50px auto; */
      }
      .m_para {
        /* border: 1px solid red; */
        width: 80%;
        /* margin: 50px auto; */
      }
      button {
        font-size: 18px;
        margin-top: 20px;
        padding: 2rem 4rem;
        color: rgb(120, 86, 255);
        border: 1px solid rgb(120, 86, 255);
      }
    }
    .m_box2 {
      width: 50%;
      /* border: 1px solid blue; */
      .m_box2_img {
        width: 100%;
        height: 100%;
      }
    }
  }
  /* ///////////////////////////////////////////////////////////////////////////// */
  .sec6 {
    border: 1px solid black;
    width: 100%;
    height: 400px;

    .sec6_bg {
      /* position: relative; */
      width: 100%;
      height: 400px;
      background-image: url("https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/thegist-bg.jpg");
    }
  }
  /* //////////////////////////////////////////////////// */
  .sec7 {
    width: 100%;

    border: 2px solid rgb(104, 170, 255);
    background-color: rgb(104, 170, 255);
    .sec7_para {
      width: 35%;
      /* height: 600px; */
      /* border: 1px solid red; */
      text-align: center;
      margin: 15rem auto;

      .sec7_p1 {
        /* border: 1px solid black; */
        .sec_para1 {
          font-size: 40px;
          font-weight: bold;
          color: white;
        }
      }
      .sec_para2 {
        color: white;
      }
      button {
        font-size: 18px;
        margin-top: 20px;
        padding: 2rem 4rem;
        color: white;
        border-radius: 10px;
        border: none;
      }
    }
  }
`;

export default HeroSection;
