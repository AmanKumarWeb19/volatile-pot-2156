import { useState, useContext } from "react";
import { AppContext } from "../Appcontext/AppContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Log = styled.div`
  /* border: 1px solid red; */
  width: 25%;
  height: 450px;
  margin: 50px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .login-form {
    width: 100%;
    /* border: 1px solid green; */

    .parent_div {
      width: 100%;
      /* border: 1px solid yellow; */
      margin: auto;
      display: flex;
      flex-direction: column;
      padding: 3rem;

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
    .login-btn {
      width: 100%;
      /* border: 1px solid red; */
      margin: auto;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.login_btn_color};
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
      border: none;
    }
  }
`;

function Login() {
  let navigate = useNavigate();
  const { loginUser } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())

      .then((data) => {
        loginUser(data.accessToken);
        navigate("/");
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Log>
      <h2>Log In</h2>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="parent_div">
          <div className="email_div">
            <label htmlFor="email">Email</label>
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
          <br />
          <div className="pass_div">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </Log>
  );
}

export default Login;
