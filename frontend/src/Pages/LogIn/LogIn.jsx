// Importing necessary dependencies and styles
import "./LogIn.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginImage from "../LogIn/images/loginImage.jpg";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

// Login component definition
function Login() {
  // State variables for email, password, and email error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Setting axios defaults for credentials
  axios.defaults.withCredentials = true;

  // Function to open Google authentication
  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  // Function to handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    try {
      // Sending login request to the server
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/home"); 
      window.location.reload();
    } catch (err) {
      if (err.response) {
        alert(err.response.data); 
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error("Error:", err.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="logindiv">
        <img src={LoginImage} className="LoginImage" alt="login" />
      </div>
      <div className="logindiv">
        <div className="loginTextdiv">
          <form onSubmit={handleLogin}>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="email"
                autoComplete="new-email"
                required
                className="loginInput"
              />
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="new-password"
                required
                className="loginInput"
              />
            </div>
            <br />
            <div>
              <button type="submit" className="loginButton">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="loginsubText">
        <Link
            to="/ForgotPassword"
            style={{ textDecoration: "none" }}
            className="loginLink"
          > Forgot Password?
          </Link> </div>
        <br />
        <div className="loginTextdiv">
          <button onClick={google} className="loginGoogleButton">
            {" "}
            <CIcon
              icon={icon.cibGoogle}
              size=""
              style={{ "--ci-primary-color": "#fff" }}
               className="dropdownIcon"
            />  Signin with Google{"   "}
          </button>
        </div>
        <div className="loginhr">
          <hr className="hrclass" />
        </div>
        <div className="loginTextdiv" style={{ display: "flex" }}>
          <div className="loginText"> Dont't Have an Account? </div>
          <Link
            to="/signup"
            style={{ textDecoration: "none" }}
            className="loginLink"
          >
            {" "}
            Signup{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Exporting the Login component
export default Login;
