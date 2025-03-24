import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import "../../Css/App/AppHomeCategory.css";
import hair from "../../Images/App_Images/Category/Hair.png";
import { FaStar } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";

import AppService from '../AppService';
import ServiceData from "../ServiceData"

const AppHomeCategory = () => {
    const [activeTab, setActiveTab] = useState(ServiceData[0].productid); // Set first tab active by default

    const handleTabClick = (productid) => {
        setActiveTab(productid); // Update active tab on click
    };

    const activeService = ServiceData.find(service => service.productid == activeTab); // Get active service details

    return (
        <>
            <section className="app-home-section-category-main-con">
                <div className="app-home-section-category-con">
                    <div className="app-home-section-category-tabs-main-con">
                        {ServiceData?.map((elem) => (
                            <div
                                key={elem.productid}
                                className={`app-home-section-category-tabs-con ${activeTab == elem.productid ? 'active' : ''}`}
                                onClick={() => handleTabClick(elem.productid)}
                            >
                                <div className="app-home-section-category-image-con">
                                    <div className="app-home-section-category-tabs-image-con">
                                        <img src={hair} alt={elem.serviceMain} />
                                    </div>
                                </div>
                                <h2>{elem.serviceMain}</h2>
                            </div>
                        ))}
                    </div>

                    <div className="app-home-section-category-section-details-main-con">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                430: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {activeService.subService.map((subService, index) => (
                                <SwiperSlide key={index}>
                                    <div className="app-home-section-category-service-main-card-con">
                                        <div className="app-home-section-category-service-card">
                                            <img src={subService.subServiceImage} alt={subService.subServiceName} />
                                        </div>
                                        <div className="app-home-section-category-service-card-details">
                                            <h3>{subService.subServiceName}</h3>
                                            <div className="app-home-section-category-service-card-star">
                                                <div className="app-home-section-category-service-card-star-con">
                                                    <FaStar />
                                                    <h4>45</h4>
                                                </div>
                                                <div className="app-home-section-category-service-card-star-time">
                                                    <h5>45 min</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="app-home-section-category-service-card-price-con">
                                            <h6>₹ {subService.subServicePrice}</h6>
                                            <div className="app-home-section-category-service-card-add-btn">
                                                <IoAddOutline />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppHomeCategory;
