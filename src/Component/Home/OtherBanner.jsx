import React from "react";
import "../../Css/OtherBanner.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import otherbanner from "../../Images/banner/other_banner.png";
const OtherBanner = ({ title ,head}) => {
  return (
    <>
      <section className="all-pages-banner-main-con service-page-banner-image">
        <div className="all-pages-banner-con">
          <h1>{head}</h1>
          <h2>
            {title ?? (
              <>
                <span>Our</span> Service
              </>
            )}
          </h2>
          <div className="all-page-banner-pagination-main-con">
            <h3>Home</h3>
            <MdOutlineKeyboardDoubleArrowRight />
            <h4>{title ?? "Our Service"}</h4>
          </div>
        </div>
        <div className="other-banner-images-main-con">
          <div className="other-banner-images-con">
            <img src={otherbanner} alt="otherbanner" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherBanner;
