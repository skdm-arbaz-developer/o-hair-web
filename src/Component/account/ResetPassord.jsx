import React from "react";
import password from "../../Images/Untitled design (5).png";
import PasswordInput from "../PasswordReset/PasswordInput";
import "../account/ForgotPassword.css";

export default function ResetPassord() {
  
  return (
    <div className="container forgotePassword">
      <div className="row w-100">
        <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
          <PasswordInput />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="imageDiv">
            <img src={password} alt='img'/>
          </div>
        </div>
      </div>
    </div>
  );
}
