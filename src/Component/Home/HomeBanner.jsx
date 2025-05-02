import React from "react";
import "../../Css/Home/HomeBanner.css";
import image01 from "../../Images/banner/banner main images.jpg";
import { BsArrowRight } from "react-icons/bs";
const HomeBanner = (() => {
    return (
        <>
            <section className="home-banner-main-con">
                <div className="home-page-section-banner-main-con">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="home-banner-main-image-left-side-con">
                                <div className="home-banner-image-left-con">
                                    <img src={image01} alt='img'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="home-banner-right-details-main-con">
                                <div className="home-banner-right-details-con">
                                    <h2>Let Your Hair Speak </h2>
                                    <h3>Style and Confidence</h3>
                                    <div className="home-banner-right-details-btn-con">
                                        <button>
                                            Book an Appointment <BsArrowRight/>
                                        </button>
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


export default HomeBanner;