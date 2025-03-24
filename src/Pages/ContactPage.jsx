import React, { useLayoutEffect } from "react";
import "../Css/ContactPage.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Button, Divider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { RiCustomerService2Fill } from "react-icons/ri";
import contactImage from "../Images/contactBanner.png";
import TimeTableComp from "../Component/TimeTableComp";

const ContactPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="all-pages-banner-main-con service-page-banner-image">
        <div className="all-pages-banner-con">
          <h1>Best Salon Near Matunga</h1>
          <h2>
            <span>Contact</span> Us
          </h2>
          <div className="all-page-banner-pagination-main-con">
            <h3>Home</h3>
            <MdOutlineKeyboardDoubleArrowRight />
            <h4>Contact Us</h4>
          </div>
        </div>
        <div className="other-banner-images-main-con">
          <div className="other-banner-images-con">
            <img src={contactImage} alt="otherbanner" />
          </div>
        </div>{" "}
      </section>
      <Divider />
      <section className="conatact-page-main-section">
        <div className="container">
          <div className="contact-page-main-section-container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-page-form-main-section-continer">
                  <div className="contact-page-form-section-main-con">
                    <h2>Experience</h2>
                    <h3>
                      {" "}
                      Get in <span>Touch</span>{" "}
                    </h3>
                    <p>
                      We think your skin should look and refshed matter Nourish
                      your outer inner beauty with our essential
                    </p>
                    <div className="contact-page-form-section-form-inputs-main-con">
                      <Form layout="vertical">
                        <div className="conatct-page-form-section-form-details-con">
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Your Name"
                              style={{ height: "50px", borderRadius: "0px" }}
                            />
                          </Form.Item>
                        </div>
                        <div className="conatct-page-form-section-form-details-con">
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Your Email"
                              style={{ height: "50px", borderRadius: "0px" }}
                            />
                          </Form.Item>
                        </div>
                        <div className="conatct-page-form-section-form-details-con">
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Subject"
                              style={{ height: "50px", borderRadius: "0px" }}
                            />
                          </Form.Item>
                        </div>
                        <div className="conatct-page-form-section-form-details-con">
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <TextArea
                              placeholder="Message"
                              style={{ borderRadius: "0px" }}
                              rows={6}
                            />
                          </Form.Item>
                        </div>

                        <div className="contact-page-form-section-btn-main-con">
                          <Form.Item label={null}>
                            <Button
                              type="primary"
                              htmlType="submit"
                              className="vs-btn"
                            >
                              Submit
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-page-details-map-and-other-info-main-con">
                  <div className="contact-page-details-map-main-con">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8066457701652!2d72.85046317544018!3d19.02823998216658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1d639a500f%3A0x9436bf615ae36356!2sO'Hair!5e0!3m2!1sen!2sin!4v1739011232018!5m2!1sen!2sin"
                      width={"100%"}
                      height={"100%"}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="contact-page-details-and-other-info-main-con">
                    <div className="contact-page-details-and-card-other-info-main-con">
                      <div class="contact-table">
                        <div class="tr">
                          <div class="tb-col text-start">
                            <span class="th">Address :</span>
                            <span class="td">
                              Ground Floor, Mahavir Building, 207, New, Telang
                              Rd, next to Post Office, Matunga East, Mumbai,
                              Maharashtra 400019
                            </span>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="tb-col">
                            <span class="th">email :</span>
                            <span class="td">
                              <a
                                href="mailto:info@example.com"
                                class="text-inherit"
                              >
                                info@example.com
                              </a>
                            </span>
                          </div>
                          <div class="tb-col">
                            <span class="th">time : </span>
                            <span class="td">16 : 00 - 19 : 00</span>
                          </div>
                        </div>

                        <h3>
                          <a>
                            <span>
                              <RiCustomerService2Fill />
                            </span>
                            +91 12345 12345
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TimeTableComp />
    </>
  );
};

export default ContactPage;
