import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../LogIn/images/loginImage.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // Function to handle Google signup
  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  }

  // Function to handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password
    };
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", user);
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login"> 
      <div className="logindiv"> 
        <img src={LoginImage} className="LoginImage" alt="login" />
      </div>
      <div className="logindiv"> 
        <div className="loginTextdiv">
          <form onSubmit={handleSignup}>
            <div>
              <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username" required autoComplete="new-username" className="loginInput" />
            </div>
            <div>
              <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required autoComplete="new-email" className="loginInput"/>
            </div>
            <div>
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required autoComplete="new-password" className="loginInput"/>
            </div>
            <div>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required autoComplete="new-confirm-password" className="loginInput"/>
            </div>
            <div>
              <br/>
              <button type="submit" className="loginButton">Sign Up</button>
            </div>
          </form>
        </div>
        <br/>
        <div className="loginTextdiv">
          <button onClick={google} className="loginGoogleButton"> Signup with Google </button>
        </div>
        <div className="loginhr">
          <hr className="hrclass" />
        </div>
        <div className="loginTextdiv" style={{display:"flex"}}> 
          <div className="loginText">  Have an Account? </div>
          <Link to="/login" style={{textDecoration: 'none'}} className="loginLink"> Signin </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
