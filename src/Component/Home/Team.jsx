import React, { useRef, useState } from 'react';
import "../../Css/Home/Team.css";
import shape01 from "../../Images/shapes/sec-shape-1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import team01 from "../../Images/Home/team/team-1-1.png"
import team02 from "../../Images/Home/team/team-1-2.png"
import team03 from "../../Images/Home/team/team-1-4.png"
import team04 from "../../Images/Home/team/team-1-5.png"
const Team = (() => {
    return (
        <>
            <section className="home-team-section">
                <div className="container">
                    <div className="home-team-section-main-con">
                        <div className="home-team-section-head-main-con">
                            <h2>our Members</h2>
                            <h3>Expert Beautician</h3>
                            <div className="home-team-section-head-image-main-con">
                                <div className="home-team-section-head-image-con">
                                    <img src={shape01} alt='img'/>
                                </div>
                            </div>
                        </div>
                        <div className="home-team-section-details-main-con">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
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
                                    <div className='home-section-team-card-body-main-con'>
                                        <div className='home-section-team-card-body-con'>
                                            <div class="team-style1">
                                                <div class="team-img">
                                                    <a href="team-details.html" tabindex="-1">
                                                        <img src={team01} alt="team01"/>
                                                    </a>
                                                </div>
                                                <h3 class="team-name h4">
                                                    <a href="" tabindex="-1">Emely jonson</a>
                                                </h3>
                                                <p class="team-degi">Manicure Expart</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='home-section-team-card-body-main-con'>
                                        <div className='home-section-team-card-body-con'>
                                            <div class="team-style1">
                                                <div class="team-img">
                                                    <a href="team-details.html" tabindex="-1">
                                                        <img src={team02} alt="team01"/>
                                                    </a>
                                                </div>
                                                <h3 class="team-name h4">
                                                    <a href="" tabindex="-1">Arika Murray</a>
                                                </h3>
                                                <p class="team-degi">Manicure Expart</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='home-section-team-card-body-main-con'>
                                        <div className='home-section-team-card-body-con'>
                                            <div class="team-style1">
                                                <div class="team-img">
                                                    <a href="team-details.html" tabindex="-1">
                                                        <img src={team03} alt="team01"/>
                                                    </a>
                                                </div>
                                                <h3 class="team-name h4">
                                                    <a href="" tabindex="-1">Lola Jonson</a>
                                                </h3>
                                                <p class="team-degi">Manicure Expart</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='home-section-team-card-body-main-con'>
                                        <div className='home-section-team-card-body-con'>
                                            <div class="team-style1">
                                                <div class="team-img">
                                                    <a href="team-details.html" tabindex="-1">
                                                        <img src={team04} alt="team01"/>
                                                    </a>
                                                </div>
                                                <h3 class="team-name h4">
                                                    <a href="" tabindex="-1">Rose Marian</a>
                                                </h3>
                                                <p class="team-degi">Manicure Expart</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});

export default Team;