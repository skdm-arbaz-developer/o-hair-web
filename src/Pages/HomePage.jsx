import React, { useLayoutEffect } from "react";
import "../Css/HomePage.css";
import Category from "../Component/Home/Category";
import About from "../Component/Home/About";
// import HomePlan from "../Component/Home/HomePlan";
import NewBanner from "../Component/Home/NewBanner";
import TimeTableComp from "../Component/TimeTableComp";
import { MetaTags } from "react-meta-tags";

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <MetaTags>
                <title>Hair Salon in Matunga | O'Hair</title>
                <meta title="Hair Salon in Matunga | O'Hair" />
                <meta name="description" content="Discover the perfect hair salon in Matunga offering expert haircuts, styling, coloring, and hair treatments. Book your appointment for a stunning new look today!" />
                <meta name="keywords" content="Hair Salon in Matunga , Salon for Hair Treatment in Matunga , Hair Cutting Salon in Matunga , Hair Salon near Matunga" />
                <link rel="canonical" href="https://www.o hair matunga.com/" />
                <meta http-equiv="cache-control" content="no-cache" />
                <meta http-equiv="expires" content="0" />
                <meta http-equiv="pragma" content="no-cache" />
                <meta property="og:title" content=" Hair Salon in Matunga | O'Hair" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.o hair matunga.com/" />
                <meta property="og:description" content="Discover the perfect hair salon in Matunga offering expert haircuts, styling, coloring, and hair treatments. Book your appointment for a stunning new look today!" />
                <meta property="og:image" content="https://www.o hair matunga.com/assets/logo.png" />
              </MetaTags>
      {/* <HomeBanner/> */}
      <NewBanner />
      {/* <HomeBannerSecond /> */}
      <Category />
      <About />
      {/* <HomePlan /> */}
      <TimeTableComp />
      <div className="container" style={{display:"none"}}>
        <p className="lead">
          Welcome to O’Hair Salon, the premier hair salon in Matunga, where we
          provide top-notch hair care and styling services. At O’Hair, we
          believe your hair is a reflection of your personality, and our mission
          is to help you look and feel your best. Whether it’s a trim, a
          makeover, or expert advice, our experienced stylists are dedicated to
          delivering exceptional results in a relaxed, professional environment.
        </p>
        <p className="lead">
          As a leading hair salon in Matunga, we offer a variety of services
          including stylish haircuts, vibrant hair coloring, smoothing
          treatments, hair spas, and special occasion styling. Our skilled
          professionals use only high-quality products and stay up-to-date with
          the latest trends to ensure you receive personalized care.
        </p>
        <p className="lead">
          We focus on enhancing your natural beauty while maintaining healthy
          hair. Our salon is designed to offer a soothing and comfortable space
          where you can unwind and enjoy a pampering experience. Client
          satisfaction, cleanliness, and comfort are our priorities.
        </p>
        <p className="lead">
          At O’Hair, we take the time to understand your hair goals, crafting
          styles that suit your face shape, lifestyle, and personality. If
          you’re looking for a hair salon in Matunga that blends creativity,
          professionalism, and warmth, O’Hair is the place for you. Book your
          appointment today and experience the difference with our expert touch.
          Let’s create something beautiful together at O’Hair Salon!
        </p>
      </div>
      {/* <OfferPage/> */}
      {/* <Team/> */}
      {/* <Testimonial /> */}
    </>
  );
};

export default HomePage;
