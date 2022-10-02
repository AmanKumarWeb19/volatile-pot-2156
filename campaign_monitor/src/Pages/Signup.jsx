import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Sign = styled.div`
  width: 30%;
  margin: 7rem auto;
  height: auto;
  .sign_one {
    .signup_logo {
      width: 40%;
      /* border: 1px solid green; */
      margin: 20px auto;
    }
    h1 {
      font-weight: 600;
    }
    p {
      width: 100%;
      text-align: center;
    }
  }

  /*  */
  .sign_two {
    /* border: 2px solid green; */
    margin: 20px auto;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;

    .parent_div {
      width: 100%;
      /* border: 2px solid red; */
      margin: auto;
      display: flex;
      flex-direction: column;
      padding: 3rem;

      .user_div {
        width: 100%;
        /* border: 1px solid red; */
        /* padding: 2rem; */
        /* gap:10rem ; */
        label {
          font-size: 12px;
        }
        input {
          width: 100%;
          margin: auto;
          padding: 0.8rem;
        }
      }
      .email_div {
        width: 100%;
        /* border: 1px solid red; */
        /* padding: 2rem; */
        /* gap:10rem ; */
        label {
          font-size: 12px;
        }
        input {
          width: 100%;
          margin: auto;
          padding: 0.8rem;
        }
      }
      .pass_div {
        width: 100%;
        /* border: 1px solid red; */
        /* padding: 2rem; */
        label {
          font-size: 12px;
        }
        input {
          width: 100%;
          margin: auto;
          padding: 0.8rem;
        }
      }
    }
    .signup-btn {
      width: 100%;
      /* border: 1px solid red; */
      margin: auto;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
      border: none;
    }
    .para span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

function Signup(props) {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
    username: "", // optional
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => navigate("/login"));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Sign>
      <div className="sign_one">
        <div className="signup_logo" onClick={() => props.setLoginTheme(false)}>
          <NavLink to="/">
            <img src="./images/lightlogo.svg" alt="logo" />
          </NavLink>
        </div>
        <h1>Sign up for free</h1>
        <p>
          Start sending beautifully designed emails today with our drag-and-drop
          editor and library of free templates.
        </p>
      </div>
      <br />
      <br />
      <br />
      {/*  */}
      <div className="sign_two">
        <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="parent_div">
            {/* username */}
            <div className="user_div">
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                name="username"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <br />
            <br />
            <br />
            {/* email */}
            <div className="email_div">
              <label htmlFor="email">EMAIl</label>
              <input
                type="text"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <br />
            <br />
            <br />
            {/* password */}
            <div className="pass_div">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="text"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>
          <br />
          <br />

          <button className="signup-btn" type="submit">
            Create My Account
          </button>
          <br />
          <br />
          <p className="para">
            To find out more about how we're using the information you're giving
            us, please review our <span> privacy statement.</span>
          </p>
        </form>
      </div>
    </Sign>
  );
}

export default Signup;
