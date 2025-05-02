import React from "react";
import "../../Css/Home/NewBanner.css";
// import bannerimage01 from "../../Images/banner/banner_image.png";
import bannerimage01 from "../../Images/bannerImage.png";
import { useNavigate } from "react-router-dom";
const NewBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="new-home-baner-section-1">
        <div className="new-home-baner-section-1-main-con">
          <div className="row">
            <div className="col-md-6">
              <div className="new-home-banner-section-details-main-con">
                <div className="new-home-banner-section-details-con">
                  <h2>O'Hair</h2>
                  <h1>Hair Salon in Matunga </h1>
                  <p>
                    Step into O’Hair Salon and transform your daily style into
                    something extraordinary. With expert care, premium products,
                    and personalized services, we help you shine with confidence
                    every single day.
                  </p>
                  <div className="new-home-banner-section-banner-btn">
                    <button onClick={() => navigate("/salon-for-hair-treatment-matunga")}>
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="new-home-banner-section-image-main-con">
                <div className="new-home-banner-section-image-con">
                  <img src={bannerimage01} alt='img'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewBanner;
