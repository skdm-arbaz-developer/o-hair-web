import React from "react";
import "../Css/ServiceDetails.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ServiceDetails = () => {
  return (
    <>
      <section className="all-pages-banner-main-con service-page-banner-image">
        <div className="all-pages-banner-con">
          <h2>Best Salon Near Matunga</h2>
          <h2>
            <span>Service</span> Details
          </h2>
          <div className="all-page-banner-pagination-main-con">
            <h3>Home</h3>
            <MdOutlineKeyboardDoubleArrowRight />
            <h4>Our Service</h4>
          </div>
        </div>
      </section>

      <section className="service-details-section-1">
        <div className="container">
          <div className="service-details-section-main-con">
            <div className="row">
              <div className="col-md-5">
                <div className="service-details-page-form-main-con">
                  <div className=""></div>
                </div>
              </div>

              <div className="col-md-7">
                <div className="service-details-section-main-details-con">
                  <div className="service-details-section-main-details-info-main-image-con">
                    <div className="service-details-section-main-details-info-main-image">
                      <img alt='img'/>
                    </div>
                  </div>

                  <div className="service-details-section-main-details-con-info">
                    <h3>health by or through water</h3>
                    <p>
                      We think your skin should look and refshed matter Nourish
                      your outer inner beauty with our essential oil infused
                      beauty products Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, do eiusmod tempor incididunt labore et
                      dolore magna aliqua. Ut enim adminim veniam. Lorem ipsum
                      dolor sit amet, consectetur adipiscing Curabitur ut
                      iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod,
                      neque nibh pretium.
                    </p>
                    <p>
                      Beauty products Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, do eiusmod tempor incididunt labore et
                      dolore magna aliqua. Ut enim adminim veniam. Lorem ipsum
                      dolor sit amet, consectetur adipiscing Curabitur ut
                      iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod,
                      neque nibh pretium.
                    </p>
                    <ul>
                      <li>Beauty products dolor consectetur adipisicing</li>
                      <li>Given they’re tree abundantly male our</li>
                      <li>Creeping evening make void own seasons behold.</li>
                    </ul>
                  </div>

                  <div className="service-details-page-details-info-second-images-main-con">
                    <div className="service-details-page-details-image-first-main-con"></div>
                    <div className="service-details-page-details-image-first-main-con"></div>
                  </div>

                  <div className="service-details-page-main-info-con-last">
                    <h4>Replenish female give him</h4>
                    <p>
                      We think your skin should look and refshed matter Nourish
                      your outer inner beauty with our essential oil infused
                      beauty products Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, do eiusmod tempor incididunt labore et
                      dolore magna aliqua. Ut enim adminim veniam. Lorem ipsum
                      dolor sit amet, consectetur adipiscing Curabitur ut
                      iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod,
                      neque nibh pretium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
