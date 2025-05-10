import React from "react";
import "../Css/App/HomePage.css";
import AppFooter from "../Component/AppHome/AppFooter";
import AppHeader from "../Component/AppHome/AppHeader";
import AppHomeCategory from "../Component/AppHome/AppHomeCategory";
import AppTeam from "../Component/AppHome/AppTeam";
const AppHome = () => {
  return (
    <>
      <section className="app-home-page-main-con">
        <AppHeader />
        <div className="app-home-page-mid-main-con">
          <AppHomeCategory />
          <AppTeam />
        </div>
        <AppFooter />
      </section>
    </>
  );
};

export default AppHome;
