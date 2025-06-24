import React, { useLayoutEffect } from "react";
import "../Css/ContactPage.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Button, Divider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { RiCustomerService2Fill } from "react-icons/ri";
import contactImage from "../Images/contactBanner.png";
import TimeTableComp from "../Component/TimeTableComp";
// import { MetaTags } from "react-meta-tags";
import $ from "jquery";

const ContactPage = () => {
  const [form] = Form.useForm();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const submitForm = (values) => {
    var body = '<!DOCTYPE html><html><head><title>Enquiry Lead</title></head><body><div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#000;padding:20px"><h2 style="color:#fff">O Hair Matunga</h2><p style="color:#fff">Hello</p><p style="color:#fff">Thank you for your interest in our products/services.</p><p style="color:#fff">Please check your enquiry which generated from website:</p><table cellpadding="5" style="margin:0"><tr><td style="text-align:left;color:#fff"><strong>Name:</strong></td><td style="text-align:left;color:#fff">' + values.name + '</td></tr><tr><td style="text-align:left;color:#fff"><strong style="color:#fff">Mail:</strong></td><td style="text-align:left;color:#fff">' + values.email + '</td></tr><tr><td style="text-align:left;color:#fff"><strong>Contact No:</strong></td><td style="text-align:left;color:#fff">' + values.contact + '</td></tr><tr><td style="text-align:left;color:#fff"><strong>Message:</strong></td><td style="text-align:left;color:#fff">' + values.message + '</td></tr></table><p style="text-align:left;color:#fff">Best regards,<br>Your Team at O Hair Matunga</p></div></body></html>';


    $.post(
      "https://skdm.in/server/v1/send_lead_mail.php",
      {
        toEmail: "ohairmatunga@gmail.com",
        fromEmail: "ohairmatunga@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Customer Lead",
        mailBody: body,
        accountName: "ohair",
        accountLeadSource: "https://ohair.in/",
        accountLeadName: values.name,
        accountLeadEmail: values.email,
        accountLeadPhone: values.contact,
      },
      function (dataa, status) {
        console.log('data:', dataa);
      }
    );

    alert("Your Form has Submitted. Our team will contact you soon.");

    // Reset the form fields after submission
    form.resetFields();
  };


  return (
    <>
      {/* <MetaTags>
                            <title>Hair Salon near Matunga | O'Hair</title>
                            <meta title="Hair Salon near Matunga | O'Hair" />
                            <meta name="description" content="Looking for a hair salon near Matunga? Get expert haircuts, coloring, and treatments at a top-rated salon just around the corner. Book your appointment today!" />
                            <meta name="keywords" content="Hair Salon in Matunga , Salon for Hair Treatment in Matunga , Hair Cutting Salon in Matunga , Hair Salon near Matunga" />
                            <link rel="canonical" href="https://www.o hair matunga.com/hair-salon-near-matunga" />
                            <meta http-equiv="cache-control" content="no-cache" />
                            <meta http-equiv="expires" content="0" />
                            <meta http-equiv="pragma" content="no-cache" />
                            <meta property="og:title" content=" Hair Salon near Matunga | O'Hair" />
                            <meta property="og:locale" content="en_US" />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://www.o hair matunga.com/" />
                            <meta property="og:description" content="Looking for a hair salon near Matunga? Get expert haircuts, coloring, and treatments at a top-rated salon just around the corner. Book your appointment today!" />
                            <meta property="og:image" content="https://www.o hair matunga.com/assets/logo.png" />
                          </MetaTags> */}
      <section className="all-pages-banner-main-con service-page-banner-image">
        <div className="all-pages-banner-con">
          <h1>Hair Salon near Matunga </h1>
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
                      Connect For A Fresh  {" "}
                      <span>Transformation</span>{" "}
                    </h3>
                    <p>
                      We think your skin should look and refshed matter Nourish
                      your outer inner beauty with our essential
                    </p>
                    <div className="contact-page-form-section-form-inputs-main-con">
                    <Form layout="vertical" onFinish={submitForm} form={form}>
  <div className="conatct-page-form-section-form-details-con">
    <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: "Please enter your name!",
        },
        {
          min: 2,
          message: "Name must be at least 2 characters.",
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
      name="email"
      rules={[
        {
          required: true,
          message: "Please enter your email!",
        },
        {
          type: "email",
          message: "Please enter a valid email address!",
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
      name="contact"
      rules={[
        {
          required: true,
          message: "Please enter your contact number!",
        },
        {
          pattern: /^[6-9]\d{9}$/,
          message: "Please enter a valid 10-digit Indian phone number!",
        },
      ]}
    >
      <Input
        placeholder="Contact Number"
        style={{ height: "50px", borderRadius: "0px" }}
      />
    </Form.Item>
  </div>

  <div className="conatct-page-form-section-form-details-con">
    <Form.Item
      name="message"
      rules={[
        {
          required: true,
          message: "Please enter your message!",
        },
        {
          min: 10,
          message: "Message should be at least 10 characters long.",
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
                                href="mailto:ohairmatunga@gmail.com"
                                class="text-inherit"
                              >
                                ohairmatunga@gmail.com
                              </a>
                            </span>
                          </div>
                          {/* <div class="tb-col">
                            <span class="th">time : </span>
                            <span class="td">16 : 00 - 19 : 00</span>
                          </div> */}
                        </div>

                        <h3>
                          <a href="tel:7400457777">
                            <span>
                              <RiCustomerService2Fill />
                            </span>
                            +91 74004 57777
                          </a>
                        </h3>
                        <h3>
                          <a href="tel:9029176825">
                            <span>
                              <RiCustomerService2Fill />
                            </span>
                            +91 90291 76825
                          </a>
                        </h3>
                        <h3>
                          <a href="tel:9820035475">
                            <span>
                              <RiCustomerService2Fill />
                            </span>
                            +91 98200 35475
                          </a>
                        </h3>
                        <h3>
                          <a href="tel:9920035475">
                            <span>
                              <RiCustomerService2Fill />
                            </span>
                            +91 99200 35475
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
      <div className="container" style={{ display: "none" }}>
        <p className="lead">Looking for a trusted hair salon near Matunga that truly understands your hair care needs? We’d love to hear from you! At O’Hair Salon, we’re committed to providing you with exceptional service, expert styling, and a warm, welcoming atmosphere every time you visit. Whether you have a question about our services, want to schedule an appointment, or simply wish to speak with our team, we’re here to help. Located conveniently in the heart of Matunga, our salon is easy to reach and offers a relaxing environment where you can unwind and enjoy personalized hair care. As a preferred hair salon near Matunga, we offer flexible appointment slots and prompt assistance to ensure your experience is smooth and hassle-free. You can contact us by phone, email, or by visiting our salon directly; we’re always happy to assist. Our team is ready to answer your queries, suggest the right treatments for your hair type, and help you choose the best styling options. We also welcome feedback and suggestions, as your satisfaction is our top priority. At O’Hair, we aim to build lasting relationships with our clients by offering reliable service and genuine care. Whether it’s your first visit or you’re a returning client, you can always expect our full attention and expertise. As a leading hair salon near Matunga, we take pride in being your go-to destination for professional haircuts, treatments, and styling services. Reach out to us today, and let’s start your hair transformation journey with confidence. O’Hair Salon is here to bring out the best in your hair with a friendly team, quality products, and a passion for excellence. We can’t wait to meet you and give your hair the care it truly deserves. Let's connect and create something beautiful together.
        </p>
      </div>
    </>
  );
};

export default ContactPage;
