import React, { useRef, useState } from 'react';
import "../../Css/Home/Testimonial.css";
import shape01 from "../../Images/shapes/sec-shape-1.png";
import { ImQuotesLeft } from "react-icons/im";
import images01 from "../../Images/Home/testimonial/pic1.jpg";
import images02 from "../../Images/Home/testimonial/pic2.jpg";
import images03 from "../../Images/Home/testimonial/pic3.jpg";
import backimage01 from "../../Images/new/testimonial/testimonial01.jpeg";
import backimage02 from "../../Images/new/testimonial/testimonial02.jpeg";
import backimage03 from "../../Images/new/testimonial/testimonial03.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testimonial = (() => {
    return (
        <>
            <section className="home-section-testimonial">
                <div className="container">
                    <div className="home-section-testimonial-main-con">
                        <div className="home-section-testimonial-head-main-con">
                            <h2>what our clients say</h2>
                            <h3>Testimonial</h3>
                            <div className="home-testimonial-section-head-image-main-con">
                                <div className="home-testimonial-section-head-image-con">
                                    <img src={shape01} alt='img'/>
                                </div>
                            </div>
                        </div>
                        <div className="home-testimonial-section-details-main-con">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="home-testimonial-section-details-con">
                                        <div className="home-testimonial-section-details-image-main-con">
                                            <ImQuotesLeft />
                                        </div>
                                        <div className="home-testimonial-section-details-para-main-con">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis quis repellat, excepturi labore ut suscipit incidunt numquam harum! Maiores rem ratione possimus porro impedit officiis quia tenetur laudantium officia?</p>
                                        </div>
                                        <h4>Siddhesh Tamhankar</h4>
                                        <div className="home-testimonial-section-details-client-images-main-con">
                                            <div className="home-testimonial-section-details-client-images-con">
                                                <img src={images01} alt='img'/>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="home-testimonial-section-details-con">
                                        <div className="home-testimonial-section-details-image-main-con">
                                            <ImQuotesLeft />
                                        </div>
                                        <div className="home-testimonial-section-details-para-main-con">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis quis repellat, excepturi labore ut suscipit incidunt numquam harum! Maiores rem ratione possimus porro impedit officiis quia tenetur laudantium officia?</p>
                                        </div>
                                        <h4>Siddhesh Tamhankar</h4>
                                        <div className="home-testimonial-section-details-client-images-main-con">
                                            <div className="home-testimonial-section-details-client-images-con">
                                                <img src={images02} alt='img'/>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="home-testimonial-section-details-con">
                                        <div className="home-testimonial-section-details-image-main-con">
                                            <ImQuotesLeft />
                                        </div>
                                        <div className="home-testimonial-section-details-para-main-con">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis quis repellat, excepturi labore ut suscipit incidunt numquam harum! Maiores rem ratione possimus porro impedit officiis quia tenetur laudantium officia?</p>
                                        </div>
                                        <h4>Siddhesh Tamhankar</h4>
                                        <div className="home-testimonial-section-details-client-images-main-con">
                                            <div className="home-testimonial-section-details-client-images-con">
                                                <img src={images03} alt='img'/>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                </div>

                {/* <div className='home-testimonail-image-01'>
                    <img src={backimage01} alt='backimage01'/>
                </div>
                <div className='home-testimonail-image-02'>
                    <img src={backimage02} alt='backimage01'/>
                </div> */}
            </section>
        </>
    )
});

export default Testimonial;