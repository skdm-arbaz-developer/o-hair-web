import React from "react";
import "../../Css/Home/NewBanner.css";
// import bannerimage01 from "../../Images/banner/banner_image.png";
import bannerimage01 from "../../Images/new/home/home-about.png";
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
                  <h3>Where Style Meets Perfection!</h3>
                  <p>
                    Step into elegance at O'Hair, where expert stylists
                    transform your look with precision and creativity. From
                    trendy cuts to luxurious treatments, we bring out your best
                    style. Book your appointment today and experience beauty
                    redefined!
                  </p>
                  <div className="new-home-banner-section-banner-btn">
                    <button onClick={() => navigate("/service")}>
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="new-home-banner-section-image-main-con">
                <div className="new-home-banner-section-image-con">
                  <img src={bannerimage01} />
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
