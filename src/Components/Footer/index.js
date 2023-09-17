import React from "react";
import "./index.scss";
import googleIcon from "../../Assets/images/googleIcon.svg";
import fbIcon from "../../Assets/images/fbIcon.svg";
import linkednIcon from "../../Assets/images/linkednIcon.svg";
import twitterIcon from "../../Assets/images/twitterIcon.svg";

const index = () => {
  return (
    <div className="footerWrap">
      <div className="footer_icons">
        <img src={googleIcon} alt="google"></img>
        <img src={fbIcon} alt="fb"></img>
        <img src={linkednIcon} alt="linkedin"></img>
        <img src={twitterIcon} alt="twitter"></img>
      </div>
      <h5>Example@gmail.com</h5>
      <h6>Copyright @ 2023 Name All rights reserved</h6>
    </div>
  );
};

export default index;
