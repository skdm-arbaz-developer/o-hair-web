import React from "react";
import "../../Css/Home/About.css";
import homeboutImage from "../../Images/banner/banner_image.png";
import about_image from "../../Images/new/home/about_image.png";
const About = (() => {
    return (
        <>
            <section className="home-section-about">
                <div className="container">
                    <div className="home-section-about-main-con">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="home-section-about-main-image-con">
                                    <div className="home-section-about-image-con">
                                        <img src={homeboutImage} alt="aboutImage" />
                                    </div>
                                    {/* <div className="home-section-about-image-over-text-con">
                                        <h2 className="jump-reverse">feature</h2>
                                        <div class="img-2 jump">
                                            <img src={aboutImage01} alt="shape" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="home-section-about-main-details-con">
                                    <div class="about-box1">
                                        <span class="sec-subtitle">Transform Yourself, Feel Renewed
                                        {/* <span class="sec-subtext">25 Years</span> */}
                                        </span>
                                        <h2 class="sec-title2">Style Made   <span class="text-theme">For</span> You </h2>
                                        <div class="media-style1">
                                            <div class="circle-btn style3">
                                                <img src={about_image} alt='img'/>
                                                {/* <a href="about.html" class="btn-icon">
                                                    <MdArrowForward/>
                                                </a>
                                                <div class="btn-text">
                                                    <svg viewBox="0 0 150 150">
                                                        <text>
                                                            <textPath href="#textPath">how to make your makeup last all day</textPath>
                                                        </text>
                                                    </svg>
                                                </div> */}
                                            </div>
                                            <div class="media-body">
                                                <p class="media-text">Let go of the ordinary and discover your true radiance with our luxurious facials and body care treatments.
                                                </p>
                                            </div>
                                        </div>
                                        <p class="about-text">Your look matters. Our team listens, styles, and cares so you leave the salon feeling your best every time.</p>
                                        <div class="table-style1">
                                            <div class="tr">
                                                <div class="th">Glamour That Lasts</div>
                                                {/* <div class="td">15 Years Service</div> */}
                                            </div>
                                            <div class="tr">
                                                {/* <div class="th">WE ALWAYS :</div> */}
                                                <div class="td">Long-lasting styles to brighten your days.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});

export default About;