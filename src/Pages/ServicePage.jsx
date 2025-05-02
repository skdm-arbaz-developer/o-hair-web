import React, { useState, useLayoutEffect } from "react";
import "../Css/ServicePage.css";
import ServiceData from "../Component/ServiceData";
import { useCartContext } from "../context/addToCart";
import OtherBanner from "../Component/Home/OtherBanner";

const ServicePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const { handleAddCart } = useCartContext();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Scroll to the corresponding section
    const targetSection = document.getElementById(`service-section-${index}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <section className="all-pages-banner-main-con service-page-banner-image">
                <div className="all-pages-banner-con">
                    <h2>Best Salon Near Matunga</h2>
                    <h2>
                        <span>Our</span> Service
                    </h2>
                    <div className="all-page-banner-pagination-main-con">
                        <h3>Home</h3>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <h4>Our Service</h4>
                    </div>
                </div>
            </section> */}

      <OtherBanner />

      <section className="service-page-section-1">
        <div className="container">
          <div className="service-page-section-main-details">
            <div className="service-page-section-tabs-main-con" id="style-1">
              <div className="service-page-section-tabs-con force-overflow">
                {ServiceData.map((elem, index) => (
                  <div
                    key={index}
                    className={`service-page-section-tabs ${
                      activeTab === index ? "active-tab" : ""
                    }`}
                    style={{
                      color: activeTab === index ? "#025739" : "#000",
                      borderBottom:
                        activeTab === index ? "1px solid #025739" : "none",
                    }}
                    onClick={() => handleTabClick(index)}
                  >
                    <h2>{elem.serviceMain}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-page-section-tabs-details-main-con">
              {ServiceData.map((elem, index) => (
                <div
                  key={index}
                  id={`service-section-${index}`}
                  className="service-page-section-tabs-details-main-con-body"
                >
                  <h5 className="service-page-main-service-head">
                    {elem.serviceMain}
                  </h5>
                  <div className="service-page-section-tabs-details-main-con-body-card-con">
                    <div className="row">
                      {elem?.subService?.map((subElem, subIndex) => (
                        <div key={subIndex} className="col-md-6">
                          <div className="service-page-section-card-body-main-con">
                            <div className="service-page-section-card-image-main-con">
                              <div className="service-page-section-card-image-con">
                                <img
                                  src={subElem.subServiceImage}
                                  alt={subElem.subServiceName}
                                />
                              </div>
                            </div>
                            <div className="service-page-section-card-details-con">
                              <div className="service-page-section-card-head-name">
                                <h2>{subElem.subServiceName}</h2>
                                <span className="price-dots"></span>
                                <h3>{subElem.subServicePrice} ₹</h3>
                              </div>
                              {/* <p>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Perspiciatis quaerat incidunt molestias odit libero
                                                                tenetur beatae saepe pariatur, consectetur totam!
                                                            </p> */}
                              <div className="service-page-section-card-btn-main-con">
                                <button
                                  className="service-page-section-card-btn"
                                  onClick={() => handleAddCart(subElem)}
                                >
                                  Book now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default ServicePage;
