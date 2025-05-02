import React from "react";
import "../../Css/App/AppTeam.css";
import { IoAddOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";
import team01 from "../../Images/App_Images/Team/team01.webp";
import team02 from "../../Images/App_Images/Team/team02.webp";
import team03 from "../../Images/App_Images/Team/team03.webp";

const AppTeam = (() => {
    return (
        <>
            <section className="app-home-team-section-main-con">
                <div className="app-home-team-section-head-main-con">
                    <h3>Meet the Masters</h3>

                </div>
                <div className="app-home-team-section-detail-main-con">
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
                            <SwiperSlide>
                                <div className="app-home-section-team-service-main-card-con">
                                    <div className="app-home-section-team-service-card-images">
                                        <div className="app-home-section-team-service-card">
                                            <img src={team01} alt='img'/>
                                        </div>
                                    </div>
                                    <div className="app-home-section-team-service-card-details">
                                        <h3>Lovkush</h3>
                                        <h4>Hair Stylish</h4>
                                        <div className="app-home-section-team-service-card-star">
                                            <div className="app-home-section-team-service-card-star-time">
                                                <h6>6 year exp</h6>
                                            </div>
                                            <div className="app-home-section-team-service-card-star-con">
                                                <FaStar />
                                                <h5>4.5</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="app-home-section-team-service-card-price-con">
                                        <h6>₹ {subService.subServicePrice}</h6>
                                        <div className="app-home-section-team-service-card-add-btn">
                                            <IoAddOutline />
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="app-home-section-team-service-main-card-con">
                                    <div className="app-home-section-team-service-card-images">
                                        <div className="app-home-section-team-service-card">
                                            <img src={team03} alt='img'/>
                                        </div>
                                    </div>
                                    <div className="app-home-section-team-service-card-details">
                                        <h3>Lovkush</h3>
                                        <h4>Hair Stylish</h4>
                                        <div className="app-home-section-team-service-card-star">
                                            <div className="app-home-section-team-service-card-star-time">
                                                <h6>6 year exp</h6>
                                            </div>
                                            <div className="app-home-section-team-service-card-star-con">
                                                <FaStar />
                                                <h5>4.5</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="app-home-section-team-service-card-price-con">
                                        <h6>₹ {subService.subServicePrice}</h6>
                                        <div className="app-home-section-team-service-card-add-btn">
                                            <IoAddOutline />
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="app-home-section-team-service-main-card-con">
                                    <div className="app-home-section-team-service-card-images">
                                        <div className="app-home-section-team-service-card">
                                            <img src={team02} alt='img'/>
                                        </div>
                                    </div>
                                    <div className="app-home-section-team-service-card-details">
                                        <h3>Lovkush</h3>
                                        <h4>Hair Stylish</h4>
                                        <div className="app-home-section-team-service-card-star">
                                            <div className="app-home-section-team-service-card-star-time">
                                                <h6>6 year exp</h6>
                                            </div>
                                            <div className="app-home-section-team-service-card-star-con">
                                                <FaStar />
                                                <h5>4.5</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="app-home-section-team-service-card-price-con">
                                        <h6>₹ {subService.subServicePrice}</h6>
                                        <div className="app-home-section-team-service-card-add-btn">
                                            <IoAddOutline />
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="app-home-section-team-service-main-card-con">
                                    <div className="app-home-section-team-service-card-images">
                                        <div className="app-home-section-team-service-card">
                                            <img src={team03} alt='img'/>
                                        </div>
                                    </div>
                                    <div className="app-home-section-team-service-card-details">
                                        <h3>Lovkush</h3>
                                        <h4>Hair Stylish</h4>
                                        <div className="app-home-section-team-service-card-star">
                                            <div className="app-home-section-team-service-card-star-time">
                                                <h6>6 year exp</h6>
                                            </div>
                                            <div className="app-home-section-team-service-card-star-con">
                                                <FaStar />
                                                <h5>4.5</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="app-home-section-team-service-card-price-con">
                                        <h6>₹ {subService.subServicePrice}</h6>
                                        <div className="app-home-section-team-service-card-add-btn">
                                            <IoAddOutline />
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                    </Swiper>

                </div>

            </section>
        </>
    )
});

export default AppTeam;