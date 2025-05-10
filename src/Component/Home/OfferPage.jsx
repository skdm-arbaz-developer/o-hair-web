import "../../Css/Home/OfferPage.css";
import image01 from "../../Images/about-3-1.jpg";

const OfferPage = (() => {
    return (
        <>
            <section
                className="vs-about-wrapper bg-dark space-top space-bottom background-image"
                data-overlay="black"
                data-opacity={5}
                // style={{ backgroundImage: 'url("assets/img/bg/about-bg-3-1.jpg")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 mb-40 mb-lg-0">
                            <div className="about-image d-inline-block transform-banner position-relative">
                                <img src={image01} alt="About Image" />
                                <div className="offer-pill">
                                    <span className="offer-number">50% off</span>
                                    <p className="offer-text">your next cut</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5 offset-xxl-1 ms-xl-5 ms-xl-xxl-0 align-self-center">
                            <div className="about-content ps-lg-4 ps-xl-0">
                                <span className="sub-title">Gift Certificates</span>
                                <h2 className="sec-title text-white lh-xs">
                                    Make someone special look
                                </h2>
                                <p className="text-white-light">
                                    Alienum phaedrum torquato eu, vis detraxit peric Mei an
                                    periculaeuripidis Alienum phaedrum torqu vis detraxit pe phaedrum
                                    torquat traxit peric Mriculis.
                                </p>
                                <div className="dotted-list text-white-light pt-2">
                                    <ul>
                                        <li>25 years experience to create stunning looks.</li>
                                        <li>Hair cuts and styles and hair treatments</li>
                                        <li>Beauty, bridal and workshops</li>
                                    </ul>
                                </div>
                                <a href="discount-offers.html" className="vs-btn mt-xl-2">
                                    purchase gift cards here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
});

export default OfferPage;