import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      console.log(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="OuterDiv">
        <div className="LeftDiv">
          <h1 className="LeftHeading">Board.</h1>
        </div>
        <div className="RightDiv">
          <div className="LoginContainer">
            <h1 className="Heading">Sign In</h1>
            <p className="SubHeading">Sign in to your account</p>
            <div className="authOuter">
              <button onClick={handleClick}>
                <div className="GoogleAuthOuter">
                  <img
                    className="Googlelogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
                    height="14px"
                  ></img>
                  <p className="signinButtontext">Sign in with Google</p>
                </div>
              </button>
              <div className="AppleAuthOuter">
                <img
                  className="Googlelogo"
                  src="https://e7.pngegg.com/pngimages/374/156/png-clipart-apple-macbook-pro-logo-apple-logo-white-logo.png"
                  height="14px"
                ></img>
                <p className="SigninButtontext">Sign in with Apple</p>
              </div>
            </div>
            <div className="FormContainer">
              <form onSubmit={handleSubmit} className="formbox">
                <label htmlFor="email">Email address</label>
                <br />
                <input
                  style={{ marginBottom: "20px" }}
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="forget_password">
                  <a href="#">Forget password?</a>
                </div>
                <button type="submit" className="submitbutton">
                  Sign In
                </button>
              </form>
            </div>
            <div className="Register">
              <p className="">
                Don't have an account? <a href="#">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
