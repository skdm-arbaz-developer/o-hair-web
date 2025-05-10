import React from "react";
import "../../Css/App/AppFooter.css";
import { FaHome } from "react-icons/fa";
import homeImages from "../../Images/App_Images/Home/home.png";
import serviceImage from "../../Images/App_Images/Home/service.png";
import profileImage from "../../Images/App_Images/Home/user.png";
const AppFooter = (() => {
    return (
        <>
            <section className="app-footer-section">
                <div className="app-footer-section-main-con">
                    <div className="app-footer-section-tabs-main-con">
                        <div className="app-footer-section-tabs-image-main-con">
                            <div className="app-footer-section-tabs-image-con">
                                <img src={homeImages} alt="homeImages"/>
                            </div>
                        </div>
                        <h3>Home</h3>
                    </div>

                    <div className="app-footer-section-tabs-main-con">
                        <div className="app-footer-section-tabs-image-main-con">
                            <div className="app-footer-section-tabs-image-con">
                                <img src={serviceImage} alt="homeImages"/>
                            </div>
                        </div>
                        <h3>Service</h3>
                    </div>

                    <div className="app-footer-section-tabs-main-con">
                        <div className="app-footer-section-tabs-image-main-con">
                            <div className="app-footer-section-tabs-image-con">
                                <img src={homeImages} alt="homeImages"/>
                            </div>
                        </div>
                        <h3>Home</h3>
                    </div>

                    <div className="app-footer-section-tabs-main-con">
                        <div className="app-footer-section-tabs-image-main-con">
                            <div className="app-footer-section-tabs-image-con">
                                <img src={profileImage} alt="homeImages"/>
                            </div>
                        </div>
                        <h3>Profile</h3>
                    </div>

                </div>
            </section>
        </>
    )
});

export default AppFooter;