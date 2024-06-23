// Importing necessary dependencies and styles
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../Component/Assets/logo.png";
import axios from "axios";
import "./ForgotPassword.css";

// Login component definition
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgotPassword", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="ForgotPasswordMainDiv">
      <div className="ForgotPasswordSecondaryDiv">
      <div className="forgot-password-topic-div">
  <div className="logo-text-container">
    <img src={logo} alt="Logo" className="logo" />
    <span className="trivia-text">Trivia</span>
  </div>
</div>
        <div className="ForgotPasswordDescription">
          Enter the Email associated with your account and we'll send you a link
          to reset your password
        </div>
        <div className="ForgotPasswordInputField">
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="ForgotPasswordButton"
            type="submit"
            onClick={handleForgotPassword}
          >
            Continue
          </button>
        </div>

        <br />
        <div className="ForgotPasswordreconfirm">
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
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

// Exporting the Login component
export default ForgotPassword;
