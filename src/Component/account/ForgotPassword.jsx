import React from "react";
import password from "../../Images/Untitled design (5).png";
import EmailEnter from "../PasswordReset/EmailEnter";
import "../account/ForgotPassword.css";

export default function ForgotPassword() {

  return (
    <div className="container forgotePassword">
      <div className="row w-100">
        <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
          <EmailEnter />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="imageDiv">
            <img src={password} />
          </div>
        </div>
      </div>
    </div>
  );
}
