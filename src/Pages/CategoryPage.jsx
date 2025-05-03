import React from "react";
import "../Css/CategoryPage.css";
import "../Css/ServicePage.css";
import OtherBanner from "../Component/Home/OtherBanner";
import Accordion from "react-bootstrap/Accordion";
import { FiPlus } from "react-icons/fi";
import notData from "../Images/notfound.png";
import { getToken } from "../services/localStorageServices";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../services/userAuthAPI";
import { Spin, Empty } from "antd";
import { useCartContext } from "../context/addToCart";
// import { MetaTags } from "react-meta-tags";

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { access_token } = getToken();
  const { handleAddCart } = useCartContext();

  const handleFetch = async () => {
    try {
      setLoading(true);
      const header = {
        Authorization: `Bearer 1|sSu6UeBi40QxG2iULlO5gUFTZOHQtDXFlKDt4hjVfb8d1209`,
      };

      const resp = await get(
        `/maincategories-all?page=${0}&limit=${20}`,
        header
      );

      if (resp) {
        setData(resp?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const dbounce = setTimeout(() => {
      handleFetch();
    }, 1000);
    return () => {
      clearTimeout(dbounce);
    };
  }, []);

  return (
    <>
    {/* <MetaTags>
                    <title>Salon for Hair Treatment in Matunga | O'Hair</title>
                    <meta title="Salon for Hair Treatment in Matunga | O'Hair" />
                    <meta name="description" content="Salon for Hair Treatment in Matunga offering professional solutions for dry, damaged, & frizzy hair. Restore your hair’s health and shine with expert treatments." />
                    <meta name="keywords" content="Hair Salon in Matunga , Salon for Hair Treatment in Matunga , Hair Cutting Salon in Matunga , Hair Salon near Matunga" />
                    <link rel="canonical" href="https://www.o hair matunga.com/salon-for-hair-treatment-matunga" />
                    <meta http-equiv="cache-control" content="no-cache" />
                    <meta http-equiv="expires" content="0" />
                    <meta http-equiv="pragma" content="no-cache" />
                    <meta property="og:title" content=" Salon for Hair Treatment in Matunga | O'Hair" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.o hair matunga.com/" />
                    <meta property="og:description" content="Salon for Hair Treatment in Matunga offering professional solutions for dry, damaged, & frizzy hair. Restore your hair’s health and shine with expert treatments." />
                    <meta property="og:image" content="https://www.o hair matunga.com/assets/logo.png" />
                  </MetaTags> */}
    <Spin spinning={loading}>
      <OtherBanner head='Salon for Hair Treatment in Matunga '/>
      {data.length > 0 ? (
        <section className="catergory-main-page-section-1">
          <div className="container">
            {data.map((elem, index) => {
              const { name, image, sub_categories, description } = elem;
              return ( elem?.sub_categories?.length > 0 &&
                <>
                  <div className="category-main-page-section-1-main-con">
                    <div className="row">
                      <div
                        className={`col-md-5 align-items-start ${
                          index % 2 === 0 ? "order-1" : "order-2"
                        }`}
                      >
                        <div className="main-category-section-image-main-con align-items-start">
                          <div className="main-category-section-image-con w-100">
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={image}
                              alt={name}
                            />
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div 
                        className={`col-md-7 ${
                          index % 2 === 0 ? "order-2" : "order-1"
                        }`}
                      >
                        <div className="category-main-page-section-details-main-con">
                          <div className="category-main-page-section-head-con">
                            <h2 className="category-main-con-head">{name}</h2>
                            <p>{description}</p>
                          </div>
                          <div className="category-main-page-section-details-card-main-con">
                            <Accordion defaultActiveKey="0">
                              {sub_categories.map((data, index) => {
                                const { name, services } = data;
                                return (
                                  <>
                                    <Accordion.Item eventKey={index.toString()}>
                                      <Accordion.Header>
                                        {name}
                                      </Accordion.Header>
                                      <Accordion.Body>
                                        <div className="new-service-page-details-menu-list-main-con">
                                          {services.map(
                                            (serviceData, serviceIndex) => (
                                              <div
                                                key={serviceIndex}
                                                className="new-service-page-setails-menu-main-con"
                                              >
                                                <div className="service-page-section-card-head-name">
                                                  <h2>{serviceData?.name}</h2>
                                                  {/* <h3>₹ {serviceData?.subServicePrice}</h3> */}
                                                </div>
                                                <span className="price-dots"></span>
                                                <div
                                                  className="service-page-section-card-btn-main-con"
                                                  onClick={() =>
                                                    handleAddCart(serviceData)
                                                  }
                                                >
                                                  <h3>
                                                    ₹ {serviceData?.price}
                                                  </h3>
                                                  <div
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    className="service-page-section-card-btn-icons"
                                                  >
                                                    <FiPlus />
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </>
                                );
                              })}
                            </Accordion>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      ) : (
        <Empty
          image={notData}
          styles={{
            image: {
              height: 350,
            },
          }}
          description={<h4 className="mb-5">No Data Found</h4>}
        />
      )}
    </Spin>
     <div className="container" style={{display:"none"}}>
     <p className="lead">Services Tailored Just for You
     </p>
     <p className="lead">Men’s Services
     </p>
     <p className="lead">O’Hair offers expert grooming solutions tailored for modern men. Our expert barbers at the Salon for Hair Treatment in Matunga deliver grooming that matches your lifestyle, using premium products and modern techniques. We also provide head massages, all performed with attention to hygiene and detail. Whether it’s a special occasion or regular upkeep, our team delivers grooming with comfort, style, and expert care.
     </p>
     <p className="lead"> Women’s Services
     </p>
     <p className="lead">Experience luxury with our complete range of women’s hair services. Our stylists specialize in haircuts, colouring, straightening, and nourishing hair spa treatments. We believe every woman deserves hair that reflects her personality, so we offer personalized consultations for the best results. With high-quality products and a warm ambience, we make every visit a pampering session that leaves you glowing with confidence.
     </p>
     <p className="lead">Waxing & Nails
     </p>
     <p className="lead">O’Hair provides smooth, skin-friendly waxing and elegant nail services. We use premium wax for a gentle, clean experience and offer everything from basic grooming to artistic nail designs. Trust the salon for hair treatment in Matunga that helps you look polished from head to toe. Whether it’s a quick touch-up or a full makeover, our experts ensure precision and comfort every step of the way.
     </p>
     <p className="lead">Facials
     </p>
     <p className="lead">Refresh and renew your skin with our specialized facial services. Our treatments are designed to cleanse, hydrate, and brighten your face using dermatologist-recommended products. From anti-ageing to acne control, we target your unique skin needs with care. Enjoy a relaxing session that not only improves your skin but also uplifts your mood and leaves you with a natural, radiant glow.
     </p>
     <p className="lead">Bridal Services
     </p>
     <p className="lead">Let us be part of your big day with personalized bridal packages. Our team provides pre-bridal skin and hair care and elegant hairstyles that suit your outfit and style. We work closely with you to ensure you look and feel perfect. For those seeking a salon for hair treatment in Matunga, O’Hair brings artistry, experience, and care under one roof.
     </p>
   </div>
   </>
  );
};

export default CategoryPage;
