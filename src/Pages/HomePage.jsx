import React, { useLayoutEffect } from "react";
import "../Css/HomePage.css";
import Category from "../Component/Home/Category";
import About from "../Component/Home/About";
// import HomePlan from "../Component/Home/HomePlan";
import NewBanner from "../Component/Home/NewBanner";
import TimeTableComp from "../Component/TimeTableComp";

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* <HomeBanner/> */}
      <NewBanner />
      {/* <HomeBannerSecond /> */}
      <Category />
      <About />
      {/* <HomePlan /> */}
      <TimeTableComp />
      {/* <OfferPage/> */}
      {/* <Team/> */}
      {/* <Testimonial /> */}
    </>
  );
};

export default HomePage;
