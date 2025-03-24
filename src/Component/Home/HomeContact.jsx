import React from "react";
import "../../Css/Home/HomeConatct.css";
import { Form, Input } from "antd";

const HomeConatct = (() => {
    return (
        <>
            <section className="home-section-contact-main-con">
                <div className="container">
                    <div className="home-section-contact-page-details-con">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="home-section-contact-form-main-con">
                                    <div className="home-section-contact-head-main-con">
                                        <h2>Book Appointment</h2>
                                        <h3>Today For Free</h3>
                                        <div className="home-section-contact-form-con">
                                            <Form>
                                                <div className="home-section-contact-form-input-con">
                                                    <Form.Item>
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Form>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-7">

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
});

export default HomeConatct;