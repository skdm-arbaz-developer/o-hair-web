import React from "react";
import SignIn from "../Component/account/SignIn";
import SignUp from "../Component/account/SignUp";
import { useParams } from "react-router-dom";
import Header from "../Component/NavBar/Header";
// import Footer from "../Component/Footer";

export default function Account() {
  const { page } = useParams();
  return (
    <>
      {/* {page === "sign-in" || page === "sign-up" ? null : <Header />} */}
      <div className="login-page">
        <div className="container d-flex justify-content-center">
          {page === "sign-in" ? <SignIn /> : null}
          {page === "sign-up" ? <SignUp /> : null}
        </div>
      </div>
      {/* {page === "sign-in" || page === "sign-up" ? null : <Footer />} */}
    </>
  );
}
