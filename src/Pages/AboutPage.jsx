import "../Css/AboutPage.css";
import About from "../Component/Home/About";
import aboutImages from "../Images/banner/about01.webp";
import icons01 from "../Images/banner/icons01.png";
import icons02 from "../Images/banner/icons02.png";
import icons03 from "../Images/banner/icons03.png";
import section2image from "../Images/banner/about02.png";
import { useLayoutEffect } from "react";
import OtherBanner from "../Component/Home/OtherBanner";
const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* <section className="all-pages-banner-main-con service-page-banner-image">
                <div className="all-pages-banner-con">
                    <h1>Passion for Hair, Dedication to Perfection</h1> 
                                        <div className="all-page-banner-pagination-main-con">
                        <h3>Home</h3>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <h4>Our Service</h4>
                    </div>
                </div>
            </section> */}

      <OtherBanner title={"About Us"} />

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
                <span className="sub-title">100% Natural Treatment</span>
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-10 col-sm-9">
                    <h2 className="sec-title">
                      Trendy and award winning salons
                    </h2>
                  </div>
                  <div className="col-lg-12 col-md-9 col-sm-11">
                    <p>
                      Alienum phaedrum torquatos nec eu, vis detraxit periculis
                      a is in mei. Mei an periculaeuripidis, hincartem ei est
                      Alienum drum torquatos nec eu, vis detraxit.
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
                            href="tel:2129799800"
                          >
                            (212) 979-9800
                          </a>
                          <a
                            className="text-inherit"
                            href="mailto:username@domain.com"
                          >
                            username@domain.com
                          </a>
                        </p>
                        <p className="mb-0">
                          <span className="d-block">336 E 5th Street</span>
                          <span>New York, NY 10003</span>
                        </p>
                      </div>
                      <div className="col-sm-6 col-lg-6 col-xl-6 mb-20">
                        <h3 className="fw-semibold fs-22 mb-1 mb-lg-2">
                          Hours
                        </h3>
                        <p className="mb-1">
                          <span className="d-block">Monday to Friday</span>
                          <span> 11am – 8pm</span>
                        </p>
                        <p className="mb-0">
                          <span className="d-block">Saturday to Sunday</span>
                          <span> 10am – 6pm</span>
                        </p>
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
                    <h4 className="mb-1 mt-n1">Hair Dryer Repairs</h4>
                    <p>
                      Alienum phaedrum torquato eu, vis detraxit
                      periculaeuripidis Mei an Alienum phaedrum vis detraxit
                      periculis cupidatat .
                    </p>
                  </div>
                </div>
                <div className="d-md-flex gap-4 about-media text-center text-md-start">
                  <div className="media-img mb-30 mb-md-0">
                    <img src={icons02} alt="about image" />
                  </div>
                  <div className="media-body">
                    <h4 className="mb-1 mt-n1">Haircut Styles</h4>
                    <p>
                      Alienum phaedrum torquato eu, vis detraxit
                      periculaeuripidis Mei an Alienum phaedrum vis detraxit
                      periculis cupidatat .
                    </p>
                  </div>
                </div>
                <div className="d-md-flex gap-4 about-media text-center text-md-start">
                  <div className="media-img mb-30 mb-md-0">
                    <img src={icons03} alt="about image" />
                  </div>
                  <div className="media-body">
                    <h4 className="mb-1 mt-n1">Beard Trim</h4>
                    <p>
                      Alienum phaedrum torquato eu, vis detraxit
                      periculaeuripidis Mei an Alienum phaedrum vis detraxit
                      periculis cupidatat .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      {/* <Team /> */}
      {/* <Testimonial /> */}
    </>
  );
};

export default AboutPage;
