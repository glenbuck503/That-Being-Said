import React from "react";
import wordsImage from "./img/languages2.png";
import ReusableForm from "./ReusableForm";

function Header() {
  return (
    <React.Fragment>
      <h2 className="said">That Being Said!</h2>
      <div className="menu">
        <div className="Login">
          <p>Login</p>
          <p>Contact</p>
          <p>Links</p>
           
      {/* <img src={wordsImage} id="languagesPic" /> */}

   
      </div>
      </div>
      </React.Fragment>
  );
}

export default Header;