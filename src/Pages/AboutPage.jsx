import "../Css/AboutPage.css";
import About from "../Component/Home/About";
import aboutImages from "../Images/banner/about01.webp";
import icons01 from "../Images/banner/icons01.png";
import icons02 from "../Images/banner/icons02.png";
import icons03 from "../Images/banner/icons03.png";
import section2image from "../Images/banner/about02.png";
import { useLayoutEffect } from "react";
import OtherBanner from "../Component/Home/OtherBanner";
import { MetaTags } from "react-meta-tags";
const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <MetaTags>
                        <title>Hair Cutting Salon in Matunga | O'Hair</title>
                        <meta title="Hair Cutting Salon in Matunga | O'Hair" />
                        <meta name="description" content="Hair Cutting Salon in Matunga offering trendy haircuts for men, women, and kids. Get the perfect look with professional stylists and personalized service." />
                        <meta name="keywords" content="Hair Salon in Matunga , Salon for Hair Treatment in Matunga , Hair Cutting Salon in Matunga , Hair Salon near Matunga" />
                        <link rel="canonical" href="https://www.o hair matunga.com/hair-cutting-salon-matunga" />
                        <meta http-equiv="cache-control" content="no-cache" />
                        <meta http-equiv="expires" content="0" />
                        <meta http-equiv="pragma" content="no-cache" />
                        <meta property="og:title" content=" Hair Cutting Salon in Matunga | O'Hair" />
                        <meta property="og:locale" content="en_US" />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://www.o hair matunga.com/" />
                        <meta property="og:description" content="Hair Cutting Salon in Matunga offering trendy haircuts for men, women, and kids. Get the perfect look with professional stylists and personalized service." />
                        <meta property="og:image" content="https://www.o hair matunga.com/assets/logo.png" />
                      </MetaTags>
      {/* <section className="all-pages-banner-main-con service-page-banner-image">
                <div className="all-pages-banner-con">
                    <h2>Passion for Hair, Dedication to Perfection</h2> 
                                        <div className="all-page-banner-pagination-main-con">
                        <h3>Home</h3>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <h4>Our Service</h4>
                    </div>
                </div>
            </section> */}

      <OtherBanner title={"About Us"} head='Hair Cutting Salon in Matunga ' />

      <section className="vs-about-wrapper-about-page space-top space-negative-bottom">
        <div className="container">
          <div className="row text-center text-lg-start align-items-center justify-content-between flex-row-reverse">
            <div className="col-lg-6 col-xl-6">
              <div className="transform-banner mb-30">
                <img src={aboutImages} alt="ABout Image" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="about-content about-page-details-main-con-info">
                <span className="sub-title">Confidence Starts with Style</span>
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-10 col-sm-9">
                    <h2 className="sec-title">Our Story, Your Style Journey</h2>
                  </div>
                  <div className="col-lg-12 col-md-9 col-sm-11">
                    <p>
                      Welcome to O’Hair, the most trusted hair-cutting salon in
                      Matunga, where style meets care and every haircut is
                      crafted with precision and passion. Founded with a vision
                      to redefine hair care experiences, O’Hair is more than
                      just a salon; it’s a space where creativity flows, trends
                      are followed, and your hair goals become our mission. Our
                      team consists of talented and professionally trained
                      stylists who bring years of experience, a deep
                      understanding of hair textures, and a commitment to
                      delivering results that not only look great but also feel
                      healthy and manageable. As a top-rated hair-cutting salon
                      in Matunga, we believe in using high-quality products, the
                      latest techniques, and personalized consultations to give
                      each client a look that enhances their personality and
                      suits their lifestyle.
                    </p>
                  </div>
                  <div className="col-lg-12 col-md-8 col-sm-10 pt-xl-2">
                    <div className="row">
                      <div className="col-sm-6 col-lg-6 col-xl-6 mb-20">
                        <h3 className="fw-semibold fs-22 mb-1 mb-lg-2">
                          Contact
                        </h3>
                        <p className="mb-1">
                          <a
                            className="text-inherit d-block"
                            href="tel:098200 35475"
                          >
                            098200 35475
                          </a>
                          <a
                            className="text-inherit"
                            href="mailto:ohairmatunga@gmail.com"
                          >
                            ohairmatunga@gmail.com
                          </a>
                        </p>
                        {/* <p className="mb-0">
                          <span className="d-block">336 E 5th Street</span>
                          <span>New York, NY 10003</span>
                        </p> */}
                      </div>
                      <div className="col-sm-6 col-lg-6 col-xl-6 mb-20">
                        <h3 className="fw-semibold fs-22 mb-1 mb-lg-2">
                          Locate
                        </h3>
                        <p className="mb-1">
                          Ground Floor, Mahavir Building, 207, New, Telang Rd,
                          next to Post Office, Matunga East, Mumbai, Maharashtra
                          400019
                          {/* <span className="d-block">Monday to Friday</span>
                          <span> 11am – 8pm</span> */}
                        </p>
                        {/* <p className="mb-0">
                          <span className="d-block">Saturday to Sunday</span>
                          <span> 10am – 6pm</span>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vs-about-wrapper-about-page-section-2 space-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-6 mb-40 mb-lg-0">
              <div className="about-us-image">
                <img src={section2image} alt="About Image" className="w-100" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xxl-1 ps-xl-5 ps-xxl-0">
              <div className="about-media-wrap">
                <div className="d-md-flex gap-4 about-media text-center text-md-start">
                  <div className="media-img mb-30 mb-md-0">
                    <img src={icons01} alt="about image" />
                  </div>
                  <div className="media-body">
                    <h4 className="mb-1 mt-n1">Relaxing Hair Experience</h4>
                    <p>
                      Whether you’re coming in for a quick trim, a trendy new
                      style, or a complete hair transformation, we ensure every
                      visit is relaxing, comfortable, and worth your time.
                    </p>
                  </div>
                </div>
                <div className="d-md-flex gap-4 about-media text-center text-md-start">
                  <div className="media-img mb-30 mb-md-0">
                    <img src={icons02} alt="about image" />
                  </div>
                  <div className="media-body">
                    <h4 className="mb-1 mt-n1">Unwind with Style</h4>
                    <p>
                      Our salon is designed to be a warm, welcoming environment
                      where you can unwind while we take care of your hair with
                      expert hands.
                    </p>
                  </div>
                </div>
                <div className="d-md-flex gap-4 about-media text-center text-md-start">
                  <div className="media-img mb-30 mb-md-0">
                    <img src={icons03} alt="about image" />
                  </div>
                  <div className="media-body">
                    <h4 className="mb-1 mt-n1">Comfortable Salon Experience</h4>
                    <p>
                      We place great importance on hygiene, client satisfaction,
                      and maintaining the integrity of your hair.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <div className="container" style={{display:"none"}}>
        <p className="lead">Elevate Your Look Today</p>
        <p className="lead">Unleash Your Inner Confidence</p>
        <p className="lead">
          Our services extend beyond haircuts; we also specialize in treatments,
          styling, colouring, and special occasion looks that elevate your
          confidence.
        </p>
        <p className="lead">
          As a dedicated hair-cutting salon in Matunga, our goal is to create
          long-lasting relationships with our clients by offering consistent
          service and personalized attention.
        </p>
        <p className="lead">
          We love helping people express themselves through their hair and feel
          their best every day. At O’Hair, your hair is our canvas, and we’re
          here to turn your vision into reality. Come visit us and experience
          the O’Hair difference, where every cut, every style, and every smile
          matters.
        </p>
      </div>
      {/* <Team /> */}
      {/* <Testimonial /> */}
    </>
  );
};

export default AboutPage;
