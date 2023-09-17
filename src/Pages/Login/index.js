import React from "react";
import "./index.scss";
import wallimage from "../../Assets/images/Illustration.png";
import googleIcon from "../../Assets/images/googleIcon.svg";
import fbIcon from "../../Assets/images/fbIcon.svg";
import linkednIcon from "../../Assets/images/linkednIcon.svg";
import twitterIcon from "../../Assets/images/twitterIcon.svg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="login_wrap">
      <div className="signin_wrap">
        <div className="signin">
          <h1>Sign In</h1>
          <p className="newuser">
            New User?<a href="#account"> Create an account</a>
          </p>

          <form className="signin_form">
            <input placeholder="Username or Email" type="text"></input>
            <input placeholder="Password" type="password"></input>
          </form>
          <div className="signin_remember">
            <input type="checkbox"></input>
            <p>Keep me signed in</p>
          </div>
          <button className="submitbtn" onClick={() => navigate("/home")}>
            Sign In
          </button>

          <div className="text-container-wrap">
            <div className="text-container">
              <div className="line-before"></div>
              <h5>Or Sign In With</h5>
              <div className="line-after"></div>
            </div>
          </div>
          <div className="signinwith_wrap">
            <img src={googleIcon} alt="google"></img>
            <img src={fbIcon} alt="fb"></img>
            <img src={linkednIcon} alt="linkedin"></img>
            <img src={twitterIcon} alt="twitter"></img>
          </div>
        </div>
      </div>

      <div className="signin_image">
        <img src={wallimage} alt="theme"></img>
      </div>
    </div>
  );
};

export default Index;
