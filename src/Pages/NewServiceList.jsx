import React, { useState, useEffect, useLayoutEffect } from "react";
import "../Css/ServicePage.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useCartContext } from "../context/addToCart";
import HomePlanData from "../Component/Home/HomePlanData";
import OtherBanner from "../Component/Home/OtherBanner";
import axios from "axios";

const NewServiceList = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs only once when the component mounts

  const { handleAddCart } = useCartContext();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Scroll to the corresponding section
    setTimeout(() => {
      const targetSection = document.getElementById(`service-section-${index}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Small delay to ensure the element exists
  };

  const [allData, setAllData] = useState([]);
  const FetchData = async () => {
    try {
      const response = await axios.get(
        "https://ohair.lifestylefitnes.com/api/fetch-category-services"
      );
      console.log("response", response);
      setAllData(response.data.data.categories);
    } catch (error) {}
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log("allData", allData);

  return (
    <>
      {/* Banner Section */}
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

      {/* Service Page Section */}
      <section className="service-page-section-1">
        <div className="container">
          <div className="service-page-section-main-details">
            {/* Tabs Navigation */}
            <div className="service-page-section-tabs-main-con" id="style-1">
              <div className="service-page-section-tabs-con force-overflow">
                {allData?.map((elem, index) => (
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
                    <h2>{elem.name}</h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="service-page-section-tabs-details-main-con">
              {allData?.map((elem, index) => (
                <div
                  key={index}
                  id={`service-section-${index}`}
                  className="service-page-section-tabs-details-main-con-body"
                >
                  <h5 className="service-page-main-service-head">
                    {elem.name}
                  </h5>
                  <div className="service-page-section-tabs-details-main-con-body-card-con">
                    <div className="row">
                      {/* Left Side Image */}
                      <div
                        className={`col-md-6 ${
                          index % 2 === 0 ? "order-md-2" : "order-md-1"
                        }`}
                      >
                        <div className="new-service-page-Image-main-con">
                          <div className="new-service-page-image-con">
                            <img src={elem.image} alt="Service" />
                          </div>
                        </div>
                      </div>

                      {/* Right Side Services List */}
                      <div
                        className={`col-md-6 ${
                          index % 2 === 0 ? "order-1" : "order-2"
                        }`}
                      >
                        <div className="new-service-page-details-menu-list-main-con">
                          {elem?.services?.map((serviceData, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className="new-service-page-setails-menu-main-con"
                            >
                              <div className="service-page-section-card-head-name">
                                <h2>{serviceData?.name}</h2>
                                <h3>₹ {serviceData?.price}</h3>
                              </div>
                              <span className="price-dots"></span>
                              <div className="service-page-section-card-btn-main-con">
                                <button
                                  className="service-page-section-card-btn"
                                  onClick={() => handleAddCart(serviceData)}
                                >
                                  Book now
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
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

export default NewServiceList;
